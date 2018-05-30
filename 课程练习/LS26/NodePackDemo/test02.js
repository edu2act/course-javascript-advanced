var test01 = require("./test01");
console.log(test01.a);
console.log(test01.b);
console.log(test01.c());

var Pern = require("./Person");
var p = new Pern("jack",23);
p.show();