// Symbol与其他类型的转换
// Symbol值不能与其他类型的值进行运算,会报错
// Symbol值可以显示的而转化为字符串和布尔值,但是不能转为数值
var x = Symbol("age");
// let y=x+"123123" 报错
var x1 = String(x);
var x2 = Boolean(x);
console.log(x1);
console.log(x2);
// let x3=Number(x) 报错
// console.log(x3)
