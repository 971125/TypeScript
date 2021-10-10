"use strict";
exports.__esModule = true;
var arrs = ["a", "b", "c", "d"];
var len = arrs.length;
for (var i = 0; i < len; i++) {
    console.log(arrs[i]);
}
// for...in循环
console.log("for...in循环");
for (var i in arrs) { //i为数组下标
    console.log(arrs[i]);
}
// for...of循环
console.log("for...of循环");
for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) { //i为数组具体值
    var i = arrs_1[_i];
    console.log(i);
}
// forEach遍历
console.log("forEach遍历");
arrs.forEach(function (value, index) {
    console.log(value + index);
});
// map遍历
// map表示映射，遍历完成之后会返回一个新的数组，但是不会改变原有数组
var mm = arrs.map(function (value, index) {
    console.log(value);
    console.log(index);
    return value.toUpperCase();
});
console.log("----------------");
console.log(mm);
