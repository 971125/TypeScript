var moduleA=require("./moduleA.js");
var func={
  showName: function(){
    console.log(moduleA.name)
  },
  getAge : function(){
    return moduleA.age
  }
}
module.exports = func