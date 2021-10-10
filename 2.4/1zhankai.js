"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var num = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var item = args_1[_a];
        num += item;
    }
    return num;
}
var arr = [1, 2, 3, 4];
var args = add(arr);
var arg_1 = add.apply(void 0, arr);
console.log(args); //01,2,3,4
console.log(arg_1); //10
//数组合并
var as = [1, 2, 3];
var a_1 = __spreadArrays(as, [4, 5]);
console.log(a_1); //1,2,3,4,5
// 赋值数组
var arra = [1, 2, 3];
var arrb = __spreadArrays(arra);
arrb.push(4);
console.log(arrb); //[1,2,3,4]
//解构赋值 展开运算符只能用在末尾
var _a = [1, 2, 3, 4, 5], a = _a[0], b = _a[1], arg3 = _a.slice(2);
console.log(a); //1
console.log(b); //2
console.log(arg3); //[3,4,5]
//ES7中的展开运算符
var argss = __rest({ a: 1, b: 2, c: 3, d: 4 }, []);
console.log(argss);
