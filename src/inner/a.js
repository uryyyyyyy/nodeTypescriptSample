var a;
(function (a) {
    function hello(word) {
        if (word === void 0) { word = "TypeScript"; }
        return "Hello, " + word;
    }
    a.hello = hello;
})(a || (a = {}));
