export{}
interface IBase{
  name:string;
  readonly author:string;
  tostring():string;
}
class MyElement implements IBase{
  readonly author:string="Jack";
  name:string="myele";
  constructor (author:string,name:string){
    this.author=author;
    this.name=name;
  }
  tostring(){
    return JSON.stringify(this);
  }
}
let e=new MyElement("jack","div")
console.log( e.tostring())