// 鸭子
 let duck=function(){
   this.singsing = function(){
     return "嘎嘎嘎...";
   }
 }
 //鹅
 let geese = function(){
   this.singsing=function(){
     return "嘎嘎嘎...";
   }
 }
 //合唱团
 let choir= [];
 //加入合唱团的方法
 var joinChoir = function (animal){
   if(animal && animal.singsing()==="嘎嘎嘎..."){
     choir.push(animal);
   }
   else{
     console.log("不像鸭子,不能加入合唱团")
   }
 }
 //加入99只鸭子
 for (var i =0;i<99;i++){
   joinChoir(new duck())
 }
 joinChoir(new geese())

 console.log(choir.length)