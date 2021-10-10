define(function(require,exports,module){
  var moduleA=require("moduleA");
  module.exports={
    showName: function(){
      console.log(moduleA.name);
    },
    getAge : function(){
      return moduleA.age
    }
  }
});