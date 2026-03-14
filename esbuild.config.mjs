import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const isWatchMode = process.argv.includes('--watch');
const outDir = 'dist';
const outFile = 'index.cjs';
const zipName = 'function.zip';

const config = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: !isWatchMode, // Minify for production, skip for fast dev builds
  sourcemap: true,
  platform: 'node',
  target: 'node22',
  outfile: `${outDir}/${outFile}`,
  // Keep the AWS SDK out of the bundle to save space in Lambda
  external: ['@aws-sdk/*'], 
  logLevel: 'info',
};

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}

if (isWatchMode) {
  let ctx = await esbuild.context(config);
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await esbuild.build(config);
  console.log('Build complete');
}

console.log('Zipping...');
const output = fs.createWriteStream(path.join(outDir, zipName));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Done! ${zipName} created (${archive.pointer()} bytes)`);
});

archive.on('error', (err) => { throw err; });

archive.pipe(output);
// Important: Lambda expects the handler file at the ROOT of the zip
archive.file(`${outDir}/${outFile}`, { name: outFile }); 
await archive.finalize();
