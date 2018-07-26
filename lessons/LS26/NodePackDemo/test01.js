//
var a = "a";
var b = 123;
var foo = function () {
    console.log(a,b);
    return 0;
}
module.exports.a = a;
module.exports.b = b;
module.exports.c = foo;
