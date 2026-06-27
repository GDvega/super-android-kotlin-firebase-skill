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

const requiredDesignSkillSections = [
  ...requiredSubskillSections.slice(0, 5),
  '# Related existing skills',
  ...requiredSubskillSections.slice(5)
];

const expectedDesignSkills = [
  'design-test-gate',
  'context-aware-ui-design',
  'compose-contextual-design-system',
  'screen-ux-audit',
  'ui-state-design'
];

const postponedDesignSkills = [
  'accessibility-design-review',
  'visual-regression-testing',
  'design-refactor-safe'
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

const expectedAuditDocs = [
  'AUDIT.md',
  'AUDIT_SECOND_PASS.md',
  'FUENTES_LOCALES.md'
];

const expectedReleaseDocs = [
  'RELEASE_NOTES_v0.3.1.md',
  'RELEASE_NOTES_v0.4.0.md'
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
  /^docs\/audits\/AUDIT.*\.md$/,
  /^docs\/audits\/FUENTES_LOCALES\.md$/,
  /^docs\/releases\/RELEASE_NOTES_v[0-9]+\.[0-9]+\.[0-9]+\.md$/,
  /^package\.json$/,
  /^package-lock\.json$/,
  /^scripts\/[^/]+\.mjs$/,
  /^\.github\/workflows\/[^/]+\.ya?ml$/,
  /^skills\/[^/]+\/SKILL\.md$/,
  /^skills\/[^/]+\/references\/[^/]+\.md$/,
  /^skills\/[^/]+\/templates\/[^/]+\.(md|kt|pro|ya?ml)$/,
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
  if (text.includes('--- name:')) {
    errors.push(`${file}: frontmatter starts on the same line as the opening delimiter`);
    return null;
  }

  if (/^---[^\n]+---/.test(text)) {
    errors.push(`${file}: frontmatter appears compressed into one line`);
    return null;
  }

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

    if (fileRel === 'README.md' && lines.length < 100) {
      errors.push('README.md: must have at least 100 lines so GitHub raw output stays readable');
    }

    if (fileRel === 'SKILL.md' && lines.length < 80) {
      errors.push('SKILL.md: root skill must have at least 80 lines so GitHub raw output stays readable');
    }

    if (fileRel.endsWith('.md')) validateMarkdownFormatting(fileRel, text, lines);

    lines.forEach((line, index) => {
      if (line.length > 500) {
        errors.push(`${fileRel}:${index + 1}: line is longer than 500 characters`);
      }
    });
  }
}

function validateMarkdownFormatting(fileRel, text, lines) {
  const fenceCount = (text.match(/```/g) || []).length;
  if (fenceCount % 2 !== 0) errors.push(`${fileRel}: unclosed fenced code block`);

  const headingLines = lines.filter((line) => /^#{1,6}\s+\S/.test(line));
  if (lines.length < 5 && headingLines.length > 1) {
    errors.push(`${fileRel}: too many headings for a Markdown file with fewer than 5 lines`);
  }

  let inFence = false;
  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (inFence) return;

    if (/^#{1,6}\s+.+#{1,6}\s+\S/.test(line)) {
      errors.push(`${fileRel}:${index + 1}: multiple Markdown headings appear on one line`);
    }

    const proseLine = line.replace(/`[^`]*`/g, '');
    const inlineHeadingIndex = proseLine.search(/#{1,6}\s+\S/);
    if (inlineHeadingIndex > 0 && proseLine.slice(0, inlineHeadingIndex).trim()) {
      errors.push(`${fileRel}:${index + 1}: Markdown heading is attached to previous text on the same line`);
    }

    if (/^#{1,6}[^#\s]/.test(line)) {
      errors.push(`${fileRel}:${index + 1}: Markdown heading is missing a space after #`);
    }
  });
}

function validatePackageJson() {
  const file = path.join(root, 'package.json');
  if (!fs.existsSync(file)) return;
  const text = readText(file);
  const lines = text.split(/\r?\n/);

  if (lines.filter((line) => line.trim()).length <= 1) {
    errors.push('package.json: appears compressed into one line');
  }

  let data;
  try {
    data = JSON.parse(text);
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
  const lines = text.split(/\r?\n/);
  if (lines.length <= 2 && text.length > 100) {
    errors.push('.github/workflows/validate.yml: appears compressed into one line');
  }

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
requireFiles('docs/audits', expectedAuditDocs, 'docs/audits');
rejectExtras('docs/audits', expectedAuditDocs, 'docs/audits');
requireFiles('docs/releases', expectedReleaseDocs, 'docs/releases');
rejectExtras('docs/releases', expectedReleaseDocs, 'docs/releases');
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
  const skillEntries = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  if (skillEntries.length === 0) errors.push('skills: expected at least one skill directory');
  const skillNames = new Set(skillEntries.map((entry) => entry.name));

  for (const name of expectedDesignSkills) {
    if (!skillNames.has(name)) errors.push(`skills: missing v0.5.0 design skill ${name}`);
  }

  for (const name of postponedDesignSkills) {
    if (skillNames.has(name)) errors.push(`skills: postponed design skill must not exist yet: ${name}`);
  }

  for (const entry of skillEntries) {
    if (!kebab.test(entry.name)) errors.push(`skills/${entry.name}: folder name is not kebab-case`);

    const dir = path.join(skillsDir, entry.name);
    const file = path.join(dir, 'SKILL.md');
    if (!fs.existsSync(file)) {
      errors.push(`${entry.name}: missing SKILL.md`);
      continue;
    }

    const requiredSections = expectedDesignSkills.includes(entry.name)
      ? requiredDesignSkillSections
      : requiredSubskillSections;
    validateSkillFile(file, entry.name, requiredSections);
    if (readText(file).split(/\r?\n/).length < 40) errors.push(`${rel(file)}: appears too short`);
    if (!fs.existsSync(path.join(dir, 'references'))) errors.push(`${entry.name}: missing references/`);
    if (!fs.existsSync(path.join(dir, 'templates'))) errors.push(`${entry.name}: missing templates/`);
  }
}

validateSkillFile(path.join(root, 'SKILL.md'), 'super-android-kotlin-firebase', requiredRootSections);
validatePackageJson();
validateWorkflow();
validateCategories();
validateFormatting();

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Skill validation passed.');

function validateCategories() {
  const file = path.join(root, 'CATEGORIES.md');
  if (!fs.existsSync(file)) return;

  const lines = readText(file).split(/\r?\n/);
  lines.forEach((line, index) => {
    if (!line.startsWith('|')) return;
    if (line.includes('<br>-') || /\|\s*-\s+/.test(line)) {
      errors.push(`CATEGORIES.md:${index + 1}: table row mixes Markdown list markers inside a table cell`);
    }
  });
}
