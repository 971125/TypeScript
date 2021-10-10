import "reflect-metadata"
class Hello3{
  @logType
  greeting:string;
  constructor(message:string){
    this.greeting=message
  }
  greet(){
    return "Hello, "+ this.greeting
  }
}
function logType(target: any,key:string){
  var t=Reflect.getMetadata("design:type",target,key);
  console.log(`${key} type: ${target}`)
}
let hello3=new Hello3("TypeScript !");
hello3.greet()