import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src/pages');

function getPages(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];

  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      pages.push(...getPages(fullPath));
    } else if (file.isFile() && file.name.endsWith('.astro')) {
      const relativePath = path.relative(pagesDir, fullPath).replace(/\\/g, '/');
      const pagePath = '/' + relativePath.replace(/index\.astro$/, '').replace(/\.astro$/, '');
      pages.push(pagePath);
    }
  });

  return pages;
}

const pages = getPages(pagesDir);
console.log('Pages found:', pages);
