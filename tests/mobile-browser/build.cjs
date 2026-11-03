const esbuild=require('esbuild');
esbuild.buildSync({entryPoints:['tests/mobile-browser/fixture.tsx'],bundle:true,outfile:'tests/mobile-browser/fixture.js',platform:'browser',format:'iife',define:{'process.env.NODE_ENV':'"production"'},alias:{obsidian:require('path').resolve('tests/mobile-browser/obsidian.ts')},tsconfig:'tsconfig.json'});
