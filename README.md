# typescriptSample

## set up

```
npm install
./node_modules/tsd/build/cli.js
```

## build (helloWorld)

```
./node_modules/typescript/bin/tsc -p ./src/helloWorld/
```

## test

```
./node_modules/typescript/bin/tsc -p ./test/
./node_modules/mocha/bin/mocha testBuild/test/helloworld/utilTest.js --require ./enable-power-assert.js
```