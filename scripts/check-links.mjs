#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let errors = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && entry.name.endsWith('.md')) checkFile(p);
  }
}
function checkFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  const re = /\[[^\]]+\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(text))) {
    const link = m[1].split('#')[0];
    if (!link) continue;
    if (/^https?:/.test(link)) {
      try { new URL(link); } catch { errors.push(`${path.relative(root, file)}: invalid external URL ${m[1]}`); }
      continue;
    }
    if (/^mailto:/.test(link)) continue;
    if (link.startsWith('`')) continue;
    const target = path.resolve(path.dirname(file), link);
    if (!fs.existsSync(target)) errors.push(`${path.relative(root, file)}: broken link ${m[1]}`);
  }
}
walk(root);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Markdown link check passed.');
