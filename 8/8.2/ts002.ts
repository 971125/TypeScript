function entitySave <T> (entity : T) :boolean{
  let ret=false;
  try{
    console.log("save entity to db");
    ret=true;
  }
  catch(e){
    ret = false;
    console.log(e);
  }
  finally{
    return ret;
  }
}