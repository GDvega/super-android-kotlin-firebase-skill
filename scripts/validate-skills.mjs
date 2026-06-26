#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skillsDir = path.join(root, 'skills');
const requiredSections = ['# Purpose', '# When to use', '# Inputs to inspect', '# Required workflow', '# Rules', '# Files commonly touched', '# Commands to validate', '# Common mistakes to avoid', '# Checklist', '# Example prompts', '# Expected response style', '# References'];
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
let errors = [];

const expectedSkills = ['android-core','kotlin-core','jetpack-compose','compose-performance','android-architecture','gradle-build','firebase-core','firebase-auth','firestore','firebase-cloud-functions','firebase-messaging','firebase-crashlytics-analytics','firebase-ai-logic','room-datastore','networking-retrofit-ktor','dependency-injection','testing','security-privacy','accessibility','debugging','play-store-release','code-review-refactor'];
const expectedRootFiles = ['README.md','SKILL.md','AGENTS.md','GEMINI.md','LICENSE','NOTICE.md','SECURITY.md','CONTRIBUTING.md','CODE_OF_CONDUCT.md','CHANGELOG.md','CATEGORIES.md'];
const expectedChecklists = ['android-project-checklist.md','compose-ui-checklist.md','firebase-checklist.md','firestore-rules-checklist.md','testing-checklist.md','security-checklist.md','performance-checklist.md','release-checklist.md','repo-maintenance-checklist.md'];
const expectedTemplates = ['compose-screen-template.md','viewmodel-template.md','repository-template.md','usecase-template.md','room-database-template.md','datastore-template.md','firebase-feature-template.md','firestore-rules-template.md','cloud-functions-template.md','unit-test-template.md','compose-ui-test-template.md','gradle-version-catalog-template.md'];
const expectedExamples = ['create-new-android-app.md','add-firebase-auth.md','add-firestore-feature.md','create-compose-screen.md','review-architecture.md','optimize-compose-performance.md','fix-gradle-error.md','generate-tests.md','prepare-play-store-release.md'];

function requireFiles(base, expected, label) {
  for (const name of expected) {
    if (!fs.existsSync(path.join(root, base, name))) errors.push(`${label}: missing ${name}`);
  }
}

function rejectExtras(base, expected, label) {
  const dir = path.join(root, base);
  if (!fs.existsSync(dir)) return;
  const allowed = new Set(expected);
  for (const entry of fs.readdirSync(dir)) {
    if (!allowed.has(entry)) errors.push(`${label}: unexpected ${entry}`);
  }
}


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

for (const file of expectedRootFiles) if (!fs.existsSync(path.join(root, file))) errors.push(`root: missing ${file}`);
requireFiles('checklists', expectedChecklists, 'checklists');
rejectExtras('checklists', expectedChecklists, 'checklists');
requireFiles('templates', expectedTemplates, 'templates');
rejectExtras('templates', expectedTemplates, 'templates');
requireFiles('examples', expectedExamples, 'examples');
rejectExtras('examples', expectedExamples, 'examples');
if (!fs.existsSync(path.join(root, 'scripts', 'validate-skills.mjs'))) errors.push('scripts: missing validate-skills.mjs');
if (!fs.existsSync(path.join(root, 'scripts', 'generate-catalog.mjs'))) errors.push('scripts: missing generate-catalog.mjs');
if (!fs.existsSync(path.join(root, 'scripts', 'check-links.mjs'))) errors.push('scripts: missing check-links.mjs');
if (!fs.existsSync(path.join(root, '.github', 'workflows', 'validate.yml'))) errors.push('github: missing .github/workflows/validate.yml');
if (!fs.existsSync(skillsDir)) errors.push('missing skills/ directory');
for (const skillName of expectedSkills) {
  if (!fs.existsSync(path.join(skillsDir, skillName))) errors.push(`skills: missing ${skillName}`);
}
for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (entry.isDirectory() && !expectedSkills.includes(entry.name)) errors.push(`skills: unexpected ${entry.name}`);
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
