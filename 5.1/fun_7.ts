let add=function (a:number,b:number){
  return a+b
}
let multi=function(a:number,b:number){
  return a*b
}
function calc(fn:(a:number,b:number) => number,c:number,d:number){
  return fn(c,d);
}
console.log(calc(add,4,2))//6
console.log(calc(multi,4,2))//8