"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
function add(a, n) {
    return a + n;
}
var a = add.apply(null, [1, 2]);
var b = add.call(null, 1, 2);
console.log(a);
console.log(b);
console.log("-------------------------");
var numbers = [5, 458, 120, -215];
var maxNums = Math.max.apply(Math, numbers);
var maxNums2 = (_a = Math.min).call.apply(_a, __spreadArrays([Math], numbers));
console.log(maxNums);
console.log(maxNums2);
console.log("-------------------");
var obj = {
    x: 99
};
var foo = {
    getV: function (y) {
        return this.x + y;
    }
};
console.log(foo.getV.call(obj, 3));
console.log(foo.getV.apply(obj, [2]));
console.log(foo.getV.apply(obj, ["2"]));
