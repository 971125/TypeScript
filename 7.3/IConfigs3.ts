export{}
interface IConfigs {
  height:number;
  width:number;
}
interface IBase{
  id:string;
  name:string;
  tostring():string
}
class MyElement implements IConfigs,IBase{
  width:number=300;
  height:number=200
  id :string="";
  name:string="myele";
  tostring(){
    return JSON.stringify(this);
  }
}
let a=new MyElement();
console.log(a.tostring())