(function(factory){
  if(typeof module==="object" && typeof module.exports === "object"){
    var v=factory(require,exports);
    if(v !== undefined) module.expotes = v;
  }
  else if(typeof define=== "function" && define.amd){
    define([
      'require',
      'exports',
      './moduleA'
    ], factory);
  }
})
(function(require, exports){
  "use strict";
  exports._esModule=true;
  var moduleA_1=require("./moduleA");
  var func={
    showName: function(){
      console.log(moduleA_1.obj.name);
    },
    getAge: function(){
      return moduleA_1.obj.age;
    }
  };
  exports.func = func
})