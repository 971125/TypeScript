"use strict";
exports.__esModule = true;
function hello(msg) {
    return "Hello," + msg;
}
var msg = "My First TypeScript";
//document.body.innerHTML=hello(msg);
//  整型
var num1 = 89.2;
var num2 = 2;
// 布尔值
var isMan = true;
var isBoy = false;
// let a : boolean=new Boolean(1)
var b = Boolean(0);
console.log(b);
var c = "\"hello\"";
console.log(c);
var name = "Jack";
var age = 20;
var mm = "\u4ECA\u5E74" + name + "\u5DF2\u7ECF" + age + "\u5C81\u4E86";
console.log(mm);
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Web"] = 3] = "Web";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
var today = Days.Sat;
console.log(today);
