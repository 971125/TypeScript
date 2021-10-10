import {obj} from './moduleA';
var func ={
  showName :function (){
    console.log(obj.name);
  },
  getAge :function (){
    return obj.age;
  }
};
export {func}