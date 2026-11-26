// Builds a single self-contained HTML preview (no CDN needed) from src/.
// Usage: NODE_PATH=<node_modules> node scripts/build-artifact.mjs <out.html>
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(process.env.NODE_PATH + '/');
const esbuild = require('esbuild');
const tw = require('tailwindcss');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = process.argv[2];

const js = await esbuild.build({
  entryPoints: [path.join(root, 'src/main.jsx')], bundle: true, minify: true, write: false,
  format: 'iife', jsx: 'automatic', loader: { '.css': 'empty' },
  define: { 'process.env.NODE_ENV': '"production"' }, nodePaths: [process.env.NODE_PATH],
  target: 'es2020', legalComments: 'none',
});
const jsCode = js.outputFiles[0].text;

const twDir = path.dirname(require.resolve('tailwindcss/package.json'));
const compiler = await tw.compile(fs.readFileSync(path.join(root, 'src/index.css'), 'utf8'), {
  base: root,
  loadStylesheet: async (id, base) => {
    const p = id === 'tailwindcss' ? path.join(twDir, 'index.css') : path.resolve(base, id);
    return { path: p, base: path.dirname(p), content: fs.readFileSync(p, 'utf8') };
  },
});
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : /\.(jsx?|js)$/.test(f) && files.push(p); } })(path.join(root, 'src'));
const candidates = new Set();
for (const f of files) for (const t of fs.readFileSync(f, 'utf8').split(/[\s"'`]+/)) if (t) candidates.add(t);
const css = compiler.build([...candidates]);
const cssMin = (await esbuild.transform(css, { loader: 'css', minify: true })).code;

const html = `<title>InnovateTech</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="InnovateTech enterprise technology consulting: SAP S/4HANA, FI/CO, FSCM, digital transformation and IT strategy.">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Sora:wght@300;400;500;600&display=swap">
<style>${cssMin}</style>
<div id="root"></div>
<script>${jsCode.replace(/<\/script/gi, '<\\/script')}</script>
`;
fs.writeFileSync(out, html);
console.log('wrote', out, (html.length / 1024).toFixed(0) + 'KB', 'css', (cssMin.length/1024).toFixed(0)+'KB');
