require.config({
  paths:{
    jquery: "./jquery.min"
  }
});
require(["jquery","moduleB"],function($,moduleB){
  moduleB.showName();
  $("#mydiv").html("age=" + moduleB.getAge());
})