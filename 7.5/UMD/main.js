const { func } = require("./moduleB");

(function(factory){
  if(typeof module === "object" && typeof module.exports === "object"){
    var v=factory(require,exports);
    if(v !== undefined)module.exports = v;
  }
  else if(typeof define === "function" && define.amd){
    define([
      'require',
      'exports',
      './moduleB'
    ], factory);
  }
})(function(require,exports){
  "use strict";
  exports.__esModule = true;
  console.log(require);
  var moduleB_1 =require('./moduleB');
  console.log(moduleB_1.func);
  moduleB_1.func.showName();
  $("#mydiv").html("age=" + moduleB_1.func.getAge());
})