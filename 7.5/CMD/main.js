define(function(require,exports,module){
  var moduleB = require("moduleB");
  console.log(moduleB)
  moduleB.showName();
  $("#mydiv").html("age="+moduleB.getAge())
})