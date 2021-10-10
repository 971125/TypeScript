class Hello2{
  greeting:string;
  constructor(message:string){
    this.greeting=message;
  }
  @writable(false)
  greet(){
    return "Hello, "+this.greeting;
  }
}
function writable(value: boolean){
  return function(target : any,propertykey : string,descriptor:PropertyDescriptor){
    console.log("=========start=======")
    console.log(propertykey);//greet
    console.log(target);//Hello2{greet:[Function]}
    console.log(descriptor)//成员的属性描述符
    console.log("=========end========")
  };
}
let hello2=new Hello2("TypeScript!")
hello2.greet()
