let sudent={
  code:"09064248",
  name:"Jack",
  age:19,
  clazz:"高三",
  inYear:2009,
  getScore:function(){
    return{
      "数学":99,
      "语文":96,
      "外语":96
    }
  }
}
sudent.walk=function(){
  console.log("walk")
}