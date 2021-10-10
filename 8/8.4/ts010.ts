import {NM as Strudent } from './ts007'
import {Teacher} from './ts008'
import {GenericDAO} from './ts009'
let student =new Strudent("09060","Jack","高三一班");
let teacher = new Teacher("T1008","Smith");
let geDAao = new GenericDAO<Strudent>();
let ret = geDAao.save(student);
console.log(ret);
let getDao_2=new GenericDAO<Teacher>();
ret = getDao_2.save(teacher);
console.log(ret)