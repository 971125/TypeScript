let obj={
  x:99
};
let foo={
  getV :function(y:number){
    return this.x+y;
  }
}
let newFunc = foo.getV.bind(obj, 2)
let a=newFunc()
console.log(a)//101