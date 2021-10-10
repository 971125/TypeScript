export{}
@log
class Hello{
  greeting:string;
  constructor(message:string){
    this.greeting=message;
  }
  greet(){
    return "Hello, "+this.greeting
  }
}
function log(constructor:Function){
  console.log("======start=========")
  console.log("call constructor:  "+constructor.prototype.constructor.name)
  console.log("======end===========")
}
let hello =new Hello("TypeScript!")
hello.greet()
