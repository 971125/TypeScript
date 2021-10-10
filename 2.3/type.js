"use strict";
exports.__esModule = true;
function getName(n) {
    if (n === "string") {
        return n;
    }
    if (n === "number") {
        return n.toString();
    }
    else {
        return n;
    }
}
var a = "hello";
var b = 999;
var x = function () {
    console.log("hello my func");
};
console.log(getName(a)); //hello
console.log(getName(b)); //999
console.log(getName(x));
