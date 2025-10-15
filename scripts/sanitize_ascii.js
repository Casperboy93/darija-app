#!/usr/bin/env node
/*
  Sanitize transliterations to ASCII-only in specified directories.
  - Removes diacritics from Latin letters while preserving Arabic script and emojis.
  - Applies common transliteration mappings (ß→ss, œ→oe, æ→ae, ø→o, þ→th, ð→d).
*/

const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  const out = [];
  (function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.(tsx?|jsx?)$/i.test(e.name)) out.push(full);
    }
  })(dir);
  return out;
}

// Common mappings for non-ASCII Latin characters that don't decompose cleanly
const SPECIAL_MAP = {
  'ß': 'ss',
  'Æ': 'AE',
  'æ': 'ae',
  'Œ': 'OE',
  'œ': 'oe',
  'Ø': 'O',
  'ø': 'o',
  'Ð': 'D',
  'ð': 'd',
  'Þ': 'Th',
  'þ': 'th',
};

function sanitizeContent(content) {
  // Normalize to NFKD to split letters and diacritics
  let s = content.normalize('NFKD');

  // Remove combining marks ONLY when they follow ASCII Latin letters
  // This preserves Arabic diacritics which follow Arabic letters.
  s = s.replace(/([A-Za-z])\p{M}+/gu, '$1');

  // Apply special Latin mappings
  s = s.replace(/[ÆæŒœØøÐðÞþß]/g, (ch) => SPECIAL_MAP[ch] || ch);

  // Optionally collapse multiple combining marks left dangling after non-Latin chars (keep as-is)
  // No-op: we intentionally preserve non-Latin scripts and emojis.
  return s;
}

function processDir(dir) {
  const files = listFiles(dir);
  let changed = 0;
  let skipped = 0;
  for (const file of files) {
    try {
      const before = fs.readFileSync(file, 'utf8');
      const after = sanitizeContent(before);
      if (after !== before) {
        fs.writeFileSync(file, after, 'utf8');
        changed++;
      } else {
        skipped++;
      }
    } catch (err) {
      console.error(`[sanitize] Error processing ${file}:`, err.message);
    }
  }
  return { files: files.length, changed, skipped };
}

function main() {
  const dirs = process.argv.slice(2);
  if (!dirs.length) {
    console.error('Usage: node scripts/sanitize_ascii.js <dir1> [dir2 ...]');
    process.exit(1);
  }
  let totalFiles = 0;
  let totalChanged = 0;
  let totalSkipped = 0;
  for (const d of dirs) {
    const abs = path.resolve(d);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isDirectory()) {
      console.error(`[sanitize] Skipping non-directory: ${abs}`);
      continue;
    }
    const { files, changed, skipped } = processDir(abs);
    totalFiles += files;
    totalChanged += changed;
    totalSkipped += skipped;
    console.log(`[sanitize] ${abs}: files=${files}, changed=${changed}, unchanged=${skipped}`);
  }
  console.log(`[sanitize] TOTAL: files=${totalFiles}, changed=${totalChanged}, unchanged=${totalSkipped}`);
}

main();