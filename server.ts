import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(process.cwd(), 'dist');

// Security headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Static assets with long cache
app.use('/_next', express.static(path.join(distPath, '_next'), {
  maxAge: '1y',
  immutable: true,
}));

app.use(express.static(distPath, {
  index: false,
  maxAge: '1h',
}));

// SPA routing: try file.html, then index.html
app.get('/{*splat}', (req, res) => {
  const pathname = req.path.replace(/\/$/, '') || '/';

  // Try exact file
  const exact = path.join(distPath, pathname + '.html');
  if (fs.existsSync(exact)) return res.sendFile(exact);

  // Try directory index
  const dirIndex = path.join(distPath, pathname, 'index.html');
  if (fs.existsSync(dirIndex)) return res.sendFile(dirIndex);

  // Try root index.html
  const root = path.join(distPath, 'index.html');
  if (fs.existsSync(root)) return res.sendFile(root);

  res.status(404).send('Not Found');
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Colmed ready on port ${PORT}`);
});
