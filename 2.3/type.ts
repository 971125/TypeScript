export{}
type myfunc = () => string;
type NameOrStringOrMyfunc = string|number|myfunc;
function getName(n:NameOrStringOrMyfunc):NameOrStringOrMyfunc{
  if(n==="string"){
    return n;
  }
  if(n==="number"){
    return n.toString()
  }
  else{
    return n
  }
}
let a:string="hello"
let b:number=999
let x=function():any{
console.log("hello my func") 
}
console.log(getName(a))//hello
console.log(getName(b))//999
console.log(getName(x))