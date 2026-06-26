#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skillsDir = path.join(root, 'skills');
const requiredSections = ['# Purpose', '# When to use', '# Inputs to inspect', '# Required workflow', '# Rules', '# Files commonly touched', '# Commands to validate', '# Common mistakes to avoid', '# Checklist', '# Example prompts', '# Expected response style', '# References'];
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
let errors = [];

function parseFrontmatter(text, file) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return null;
  const raw = text.slice(4, end).trim();
  const data = {};
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) { errors.push(`${file}: invalid frontmatter line: ${line}`); continue; }
    data[m[1]] = m[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return { data, body: text.slice(end + 5) };
}

if (!fs.existsSync(skillsDir)) errors.push('missing skills/ directory');
for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = path.join(skillsDir, entry.name);
  const file = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(file)) { errors.push(`${entry.name}: missing SKILL.md`); continue; }
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const parsed = parseFrontmatter(text, rel);
  if (!parsed) { errors.push(`${rel}: missing valid YAML frontmatter`); continue; }
  const { data, body } = parsed;
  if (!data.name) errors.push(`${rel}: missing name`);
  if (!data.description) errors.push(`${rel}: missing description`);
  if (data.name !== entry.name) errors.push(`${rel}: name '${data.name}' does not match folder '${entry.name}'`);
  if (data.name && !kebab.test(data.name)) errors.push(`${rel}: name is not kebab-case`);
  if (data.description && data.description.length < 30) errors.push(`${rel}: description is too short`);
  for (const section of requiredSections) if (!body.includes(section)) errors.push(`${rel}: missing section ${section}`);
  const lines = text.split(/\r?\n/);
  if (lines.length < 40) errors.push(`${rel}: appears too short`);
  if (lines.some(line => line.length > 500)) errors.push(`${rel}: contains a very long line; check markdown formatting`);
  if (!fs.existsSync(path.join(dir, 'references'))) errors.push(`${entry.name}: missing references/`);
  if (!fs.existsSync(path.join(dir, 'templates'))) errors.push(`${entry.name}: missing templates/`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Skill validation passed.');
