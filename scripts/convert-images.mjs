import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const MAX_WIDTH = 1200;
const QUALITY = 80;

const files = await readdir(PUBLIC_DIR);
const images = files.filter(f => ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()));

for (const file of images) {
  const input = join(PUBLIC_DIR, file);
  const output = join(PUBLIC_DIR, basename(file, extname(file)) + '.webp');
  const before = (await stat(input)).size;

  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const after = (await stat(output)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`${file} → ${basename(output)} | ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB (-${saved}%)`);
}
