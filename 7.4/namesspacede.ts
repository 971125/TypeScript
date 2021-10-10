
namespace com.wyd.demo{
  interface IPeople{
    id:string;
    name:string;
    learn();
  }
  export class Man implements IPeople{
    public id :string="";
    public name:string="";
    constructor(id:string,name:string){
      this.name=name;
      this.id=id;
    }
    learn(){
      console.log(this.name+" learning")
    }
  }
}
let man=new com.wyd.demo.Man("001","jack");
man.learn()