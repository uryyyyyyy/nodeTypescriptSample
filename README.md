# typescriptSample


## inner module

./node_modules/typescript/bin/tsc --sourcemap --noImplicitAny --target es5 --out build/build.js src/inner/b.ts

node build/buiild.js

## outer module

./node_modules/typescript/bin/tsc --module commonjs  src/outer/b.ts

(this command will generate a.js & b.js, so cannot  use `--out` option?)
