import util = require("../../src/helloWorld/util");
import assert_ from 'power-assert';
var assert = assert_;//assertの名前が変わるとdecorateされなかった。

describe('util', () => {

    describe('hello()', () => {
        it('should add return [2,3]', () => {
            let result = util.hello();
            assert(result ===  "Hello, TypeScript");
        });
    });
});