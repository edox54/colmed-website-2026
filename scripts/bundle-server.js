const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Copy static export to dist/
const outDir = path.join(__dirname, '..', 'out');
const distDir = path.join(__dirname, '..', 'dist');

if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true });
fs.cpSync(outDir, distDir, { recursive: true });

// Bundle server.ts → dist/server.cjs
execSync('npx esbuild server.ts --bundle --platform=node --format=cjs --outfile=dist/server.cjs --packages=external', {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
});

console.log('✓ Build complete: dist/server.cjs + static assets');
