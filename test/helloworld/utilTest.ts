import util = require("../../src/helloWorld/util");
let assert = require('power-assert');

describe('util', () => {

    describe('hello()', () => {
        it('should add return [2,3]', () => {
            let result = util.hello();
            assert(result ===  "string");
        });
    });
});