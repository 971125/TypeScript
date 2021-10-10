"use strict";
exports.__esModule = true;
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
console.log(Days["Sun"] === 0); //true
console.log(Days[2] === "Tue"); //true
console.log('------------------------');
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 1] = "Sun";
    Days1[Days1["Mon"] = 2] = "Mon";
    Days1[Days1["Tue"] = 3] = "Tue";
    Days1[Days1["Web"] = 4] = "Web";
    Days1[Days1["Thu"] = 5] = "Thu";
    Days1[Days1["Fri"] = 6] = "Fri";
    Days1[Days1["Sat"] = 7] = "Sat";
})(Days1 || (Days1 = {}));
console.log(Days1["Fri"]);
console.log(Days1["Sat"] === 7);
console.log('------------------------');
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 1] = "Sun";
    Days2[Days2["Mon"] = 2] = "Mon";
    Days2[Days2["Tue"] = 4] = "Tue";
    Days2[Days2["Web"] = 3] = "Web";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
console.log(Days2[4]); //Thu
console.log(Days2["Thu"]); //4
console.log(Days2["Tue"]); //4
console.log('------------------------');
var Days3;
(function (Days3) {
    Days3[Days3["Sun"] = "S"] = "Sun";
    Days3[Days3["Mon"] = 2] = "Mon";
    Days3[Days3["Tue"] = 4] = "Tue";
    Days3[Days3["Web"] = 5] = "Web";
    Days3[Days3["Thu"] = 6] = "Thu";
    Days3[Days3["Fri"] = 7] = "Fri";
    Days3[Days3["Sat"] = 8] = "Sat";
})(Days3 || (Days3 = {}));
console.log(typeof (Days3["Sun"]));
var directions = 0 /* Up */;
console.log(directions);
var ss = Number(123);
console.log(typeof (ss));
console.log("any和object对比");
var notSure = 4;
// notSure.ifItExists()
// notSure.toFixed()
var prottySure = 4;
// prottySure.toFixed();
console.log(typeof (prottySure));
