define(["moduleA"], function(moduleA) {
  return{
    showName : function(){
      console.log(moduleA.name)
    },
    getAge : function(){
      return moduleA.age
    }
  }
});