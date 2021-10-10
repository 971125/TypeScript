export{}
class Person{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  };
  walk(){
    console.log(this.name+"walk....." )};
  eat(){
    console.log(this.name+"eating");
  };
}

class Student extends Person{
  clazz:string;
  constructor(name:string,age:number,clazz:string){
    super(name,age);
    this.clazz=clazz;
  };
  learn(){
    console.log(this.name+"learing");
  };
  display(){
    console.log(JSON.stringify(this))
  };

}
class HighSchoolStuddent extends Student {
  clazz:string;
  constructor(name:string,age:number,clazz:string) {
    super(name,age,clazz);
    this.clazz=clazz;
  };
  goNCEE(){
    console.log(this.name+ "take NCEE");
  };
}
let studentA= new HighSchoolStuddent("Jack",17,"高三一班");
studentA.walk();//Jackwalk
studentA.learn();//Jacklearing
studentA.goNCEE();//Jacktake NCEE
studentA.display();//{"name":"Jack","age":17,"clazz":"高三一班"}

let StudentB =studentA as Student;
StudentB.display();


<Person><unknown>studentA.walk()
