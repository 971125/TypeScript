import { GenericDAO } from "./ts009";

interface IGeneric {
  length : number
}
class GenericAdd<T extends IGeneric>{
  arg : T;
  add(arg :T) : boolean{
    this.arg = arg;
    arg.length++;
    return true
  }
  getLength() {
    return this.arg.length;
  }
}

class ObjLen{
  length =2;
  name = "obj";
} 
let Obj = new ObjLen();
let geDao = new GenericAdd<ObjLen>().add(Obj);
let geDao_1= new GenericAdd<string>().add("hello")
// let geDao_2=new GenericAdd<number>() // number 没有name属性