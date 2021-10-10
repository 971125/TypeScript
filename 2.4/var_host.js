//代码段1--------------
var myvar = '变量值1';
console.log(myvar);
//代码段2---------------
var myvar1 = '变量值2';
(function () {
    console.log(myvar1);
})();
//代码段3---------------
var myvar = '变量值3';
(function () {
    console.log(myvar);
    var myvar = '变量值4';
})();
