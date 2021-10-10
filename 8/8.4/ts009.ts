interface IGeneric <T>{
  arg:T;
  save(arg :T):boolean;
}
class GenericDAO <T> implements  IGeneric<T> {
  arg :T;
  save (arg :T) :boolean{
    let ret =false;
    try{
      console.log("save to db");
      ret=true
    }
    catch(e){
      console.log(e);
      ret=false;
    }
    finally{
      return ret
    }
  }
}

export {GenericDAO}