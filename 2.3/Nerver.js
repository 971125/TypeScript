var _a;
function error(message) {
    throw new Error(message);
}
// 返回never的函数必须存在无法结束
function infinit() {
    while (true) {
    }
}
// Symbol类型
var s1 = Symbol("name");
var s2 = Symbol("age");
console.log(s1); //Symbol(name)
console.log(s2); //Symbol(age)
console.log(s1.toString()); //"Symbol(name)"
console.log(s2.toString()); //"Symbol(age)"
// 没有参数的情况
var a = Symbol();
var b = Symbol();
console.log(a === b); //false
// 有参数的情况
var s3 = Symbol('age');
var s4 = Symbol('name');
console.log(s3 === s4); //false
// Symbol类型作为对象属性名
var sym = Symbol("name");
var sym1 = Symbol("name");
var obj = (_a = {},
    _a[sym] = "value",
    _a[sym1] = "value2",
    _a.name = "value3",
    _a);
console.log(obj);
