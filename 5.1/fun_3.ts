export{}
function add(a:number,n:number){
  return a+n;
}
let a=add.apply(null,[1,2])
let b=add.call(null,1,2)
console.log(a)
console.log(b)
console.log("-------------------------")
let numbers=[5,458,120,-215];
let maxNums=Math.max.apply(Math,numbers)
let maxNums2=Math.min.call(Math,...numbers)
console.log(maxNums)
console.log(maxNums2)
console.log("-------------------")
let obj={
  x:99
}
let foo={
  getV: function(y:number){
    return this.x+y;
  }
}
console.log(foo.getV.call(obj,3))//102
console.log(foo.getV.apply(obj,[2]))//101
console.log(foo.getV.apply(obj,["2"]))//992