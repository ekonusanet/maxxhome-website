import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/client/assets', { recursive: true });
await mkdir('dist/server', { recursive: true });
await cp('index.html', 'dist/client/index.html');
await cp('assets', 'dist/client/assets', { recursive: true });
await cp('worker.js', 'dist/server/index.js');

