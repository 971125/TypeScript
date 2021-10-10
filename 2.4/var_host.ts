//代码段1--------------
var myvar : string='变量值1';
console.log(myvar);//变量值1
//代码段2---------------
var myvar1 : string='变量值2';
(function(){
  console.log(myvar1);//变量值2
})()
//代码段3---------------
var myvar : string='变量值3';
(function(){
  console.log(myvar)//undefine
  var myvar : string='变量值4';
})()