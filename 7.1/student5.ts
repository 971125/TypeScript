let student = {
  code:"09064248",
  name:"Jack",
  age:18,
  class:"高三",
  getScore:function(){
    return {
      "数学":99,
      "语文":96,
      "外语":98,
    }
  },
  walk: function(){}
}
// 动态添加属性
 interface student{
   [key : string]:any
 }
//  添加属性
student["height"]=180;
student["weight"]=120;
// 外部可以添加
student.walk=function(){
  console.log(this.name+"walk    "+this.height+"  "+this.weight)
}
student.walk()
// console.log(student.height) 不能用student.height调用