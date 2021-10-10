export{}
let arrs=[1,2,3];
let iterator = arrs[Symbol.iterator]();
while(true){
  let a=iterator.next();
  if(a.done){
    break
  }
  else{
    console.log(a.value)//1,2,3
  }
}