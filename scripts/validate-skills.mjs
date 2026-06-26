#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skillsDir = path.join(root, 'skills');
const errors = [];
const seenNames = new Map();
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const requiredSubskillSections = [
  '# Purpose',
  '# When to use',
  '# Inputs to inspect',
  '# Required workflow',
  '# Rules',
  '# Files commonly touched',
  '# Commands to validate',
  '# Common mistakes to avoid',
  '# Checklist',
  '# Example prompts',
  '# Expected response style',
  '# References'
];

const requiredRootSections = [
  '## When to use this super skill',
  '## When not to use it',
  '## How to select subskills',
  '## Global agent rules',
  '## Architecture rules',
  '## Kotlin rules',
  '## Compose rules',
  '## Firebase rules',
  '## Security rules',
  '## Testing rules',
  '## Performance rules',
  '## Accessibility rules',
  '## Release rules',
  '## Required response format',
  '## Before editing checklist',
  '## Before final answer checklist'
];

const requiredPackageScripts = {
  validate: 'node scripts/validate-skills.mjs',
  catalog: 'node scripts/generate-catalog.mjs',
  links: 'node scripts/check-links.mjs',
  check: 'npm run validate && npm run catalog && npm run links'
};

const expectedSkills = [
  'android-core',
  'kotlin-core',
  'jetpack-compose',
  'compose-performance',
  'android-architecture',
  'gradle-build',
  'firebase-core',
  'firebase-auth',
  'firestore',
  'firebase-cloud-functions',
  'firebase-messaging',
  'firebase-crashlytics-analytics',
  'firebase-ai-logic',
  'room-datastore',
  'networking-retrofit-ktor',
  'dependency-injection',
  'testing',
  'security-privacy',
  'accessibility',
  'debugging',
  'play-store-release',
  'code-review-refactor'
];

const expectedRootFiles = [
  'README.md',
  'SKILL.md',
  'AGENTS.md',
  'GEMINI.md',
  'LICENSE',
  'NOTICE.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'CHANGELOG.md',
  'CATEGORIES.md',
  'package.json',
  'package-lock.json'
];

const expectedChecklists = [
  'android-project-checklist.md',
  'compose-ui-checklist.md',
  'firebase-checklist.md',
  'firestore-rules-checklist.md',
  'testing-checklist.md',
  'security-checklist.md',
  'performance-checklist.md',
  'release-checklist.md',
  'repo-maintenance-checklist.md'
];

const expectedTemplates = [
  'compose-screen-template.md',
  'viewmodel-template.md',
  'repository-template.md',
  'usecase-template.md',
  'room-database-template.md',
  'datastore-template.md',
  'firebase-feature-template.md',
  'firestore-rules-template.md',
  'cloud-functions-template.md',
  'unit-test-template.md',
  'compose-ui-test-template.md',
  'gradle-version-catalog-template.md'
];

const expectedExamples = [
  'create-new-android-app.md',
  'add-firebase-auth.md',
  'add-firestore-feature.md',
  'create-compose-screen.md',
  'review-architecture.md',
  'optimize-compose-performance.md',
  'fix-gradle-error.md',
  'generate-tests.md',
  'prepare-play-store-release.md'
];

const auditedGlobs = [
  /^README\.md$/,
  /^SKILL\.md$/,
  /^AGENTS\.md$/,
  /^GEMINI\.md$/,
  /^NOTICE\.md$/,
  /^SECURITY\.md$/,
  /^CONTRIBUTING\.md$/,
  /^CODE_OF_CONDUCT\.md$/,
  /^CHANGELOG\.md$/,
  /^CATEGORIES\.md$/,
  /^AUDIT.*\.md$/,
  /^FUENTES_LOCALES\.md$/,
  /^package\.json$/,
  /^package-lock\.json$/,
  /^scripts\/[^/]+\.mjs$/,
  /^\.github\/workflows\/[^/]+\.ya?ml$/,
  /^skills\/[^/]+\/SKILL\.md$/,
  /^skills\/[^/]+\/references\/[^/]+\.md$/,
  /^skills\/[^/]+\/templates\/[^/]+\.md$/,
  /^checklists\/[^/]+\.md$/,
  /^templates\/[^/]+\.md$/,
  /^examples\/[^/]+\.md$/,
  /^tests\/[^/]+\.md$/
];

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

function readText(file) {
  return fs.readFileSync(file, 'utf8');
}

function listDir(base) {
  const dir = path.join(root, base);
  return fs.existsSync(dir) ? fs.readdirSync(dir).sort() : [];
}

function requireFiles(base, expected, label) {
  for (const name of expected) {
    if (!fs.existsSync(path.join(root, base, name))) {
      errors.push(`${label}: missing ${name}`);
    }
  }
}

function rejectExtras(base, expected, label) {
  const allowed = new Set(expected);
  for (const entry of listDir(base)) {
    if (!allowed.has(entry)) errors.push(`${label}: unexpected ${entry}`);
  }
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, files);
    else files.push(file);
  }
  return files;
}

function parseFrontmatter(text, file) {
  if (!text.startsWith('---\n')) {
    errors.push(`${file}: missing opening YAML frontmatter delimiter`);
    return null;
  }

  const end = text.indexOf('\n---\n', 4);
  if (end === -1) {
    errors.push(`${file}: missing closing YAML frontmatter delimiter on its own line`);
    return null;
  }

  const raw = text.slice(4, end).trim();
  if (!raw) errors.push(`${file}: empty frontmatter`);
  const data = {};

  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);
    if (!match) {
      errors.push(`${file}: invalid frontmatter line: ${line}`);
      continue;
    }
    const key = match[1];
    const value = match[2].replace(/^['"]|['"]$/g, '').trim();
    data[key] = value;
  }

  return {
    data,
    body: text.slice(end + 5)
  };
}

function validateSkillFile(file, expectedName, requiredSections) {
  const text = readText(file);
  const fileRel = rel(file);
  const parsed = parseFrontmatter(text, fileRel);
  if (!parsed) return;

  const { data, body } = parsed;
  if (!data.name) errors.push(`${fileRel}: missing name`);
  if (!data.description) errors.push(`${fileRel}: missing description`);
  if (data.name && !kebab.test(data.name)) errors.push(`${fileRel}: name is not kebab-case`);
  if (expectedName && data.name !== expectedName) {
    errors.push(`${fileRel}: name '${data.name}' does not match expected '${expectedName}'`);
  }
  if (data.description && data.description.length < 40) {
    errors.push(`${fileRel}: description is too short or generic`);
  }
  if (!body.trim()) errors.push(`${fileRel}: missing Markdown body`);

  for (const section of requiredSections) {
    if (!body.includes(section)) errors.push(`${fileRel}: missing section ${section}`);
  }

  if (data.name) {
    const previous = seenNames.get(data.name);
    if (previous) errors.push(`${fileRel}: duplicate skill name '${data.name}' also used by ${previous}`);
    else seenNames.set(data.name, fileRel);
  }
}

function validateFormatting() {
  for (const file of walk(root)) {
    const fileRel = rel(file);
    if (!auditedGlobs.some((pattern) => pattern.test(fileRel))) continue;

    const text = readText(file);
    const lines = text.split(/\r?\n/);
    if (text.includes('\r\n')) errors.push(`${fileRel}: use LF line endings, not CRLF`);
    if (!text.endsWith('\n')) errors.push(`${fileRel}: missing trailing newline`);
    if (lines.length <= 2 && text.length > 500) {
      errors.push(`${fileRel}: appears compressed into one giant line`);
    }
    if (fileRel.endsWith('.md') && (text.match(/```/g) || []).length % 2 !== 0) {
      errors.push(`${fileRel}: unclosed fenced code block`);
    }

    lines.forEach((line, index) => {
      if (line.length > 500) {
        errors.push(`${fileRel}:${index + 1}: line is longer than 500 characters`);
      }
    });
  }
}

function validatePackageJson() {
  const file = path.join(root, 'package.json');
  if (!fs.existsSync(file)) return;

  let data;
  try {
    data = JSON.parse(readText(file));
  } catch (error) {
    errors.push(`package.json: invalid JSON: ${error.message}`);
    return;
  }

  for (const [name, command] of Object.entries(requiredPackageScripts)) {
    if (data.scripts?.[name] !== command) {
      errors.push(`package.json: script '${name}' must be '${command}'`);
    }
  }
}

function validateWorkflow() {
  const file = path.join(root, '.github', 'workflows', 'validate.yml');
  if (!fs.existsSync(file)) {
    errors.push('github: missing .github/workflows/validate.yml');
    return;
  }

  const text = readText(file);
  for (const needle of [
    'actions/checkout@v4',
    'actions/setup-node@v4',
    'node-version: "22"',
    'npm ci',
    'npm run validate',
    'npm run catalog',
    'git diff --exit-code CATEGORIES.md',
    'npm run links'
  ]) {
    if (!text.includes(needle)) errors.push(`.github/workflows/validate.yml: missing '${needle}'`);
  }
}

for (const file of expectedRootFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`root: missing ${file}`);
}

requireFiles('checklists', expectedChecklists, 'checklists');
rejectExtras('checklists', expectedChecklists, 'checklists');
requireFiles('templates', expectedTemplates, 'templates');
rejectExtras('templates', expectedTemplates, 'templates');
requireFiles('examples', expectedExamples, 'examples');
rejectExtras('examples', expectedExamples, 'examples');

for (const script of ['validate-skills.mjs', 'generate-catalog.mjs', 'check-links.mjs']) {
  if (!fs.existsSync(path.join(root, 'scripts', script))) errors.push(`scripts: missing ${script}`);
}

if (!fs.existsSync(skillsDir)) {
  errors.push('missing skills/ directory');
} else {
  for (const skillName of expectedSkills) {
    if (!fs.existsSync(path.join(skillsDir, skillName))) errors.push(`skills: missing ${skillName}`);
  }

  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (!expectedSkills.includes(entry.name)) errors.push(`skills: unexpected ${entry.name}`);

    const dir = path.join(skillsDir, entry.name);
    const file = path.join(dir, 'SKILL.md');
    if (!fs.existsSync(file)) {
      errors.push(`${entry.name}: missing SKILL.md`);
      continue;
    }

    validateSkillFile(file, entry.name, requiredSubskillSections);
    if (readText(file).split(/\r?\n/).length < 40) errors.push(`${rel(file)}: appears too short`);
    if (!fs.existsSync(path.join(dir, 'references'))) errors.push(`${entry.name}: missing references/`);
    if (!fs.existsSync(path.join(dir, 'templates'))) errors.push(`${entry.name}: missing templates/`);
  }
}

validateSkillFile(path.join(root, 'SKILL.md'), 'super-android-kotlin-firebase', requiredRootSections);
validatePackageJson();
validateWorkflow();
validateFormatting();

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Skill validation passed.');
