import {IPerson} from './IPerson'
class Person implements IPerson{
  walk(){
    console.log(this.name + " walk");
  }
  eat(){
    console.log(this.name + " eating");
  }
  constructor (name:string){
    this.name=name
  }
  id:string;
  name:string;
  age:number;
}
export {Person}