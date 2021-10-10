"use strict";
exports.__esModule = true;
var arrs = [1, 2, 3];
var iterator = arrs[Symbol.iterator]();
while (true) {
    var a = iterator.next();
    if (a.done) {
        break;
    }
    else {
        console.log(a.value);
    }
}
