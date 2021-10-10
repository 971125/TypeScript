function echo <T>(msg:T) :T{
  if(typeof msg === "string"){
    console.log(<string><unknown>msg.length);
  }
  if(typeof msg==="number"){
    console.log(<number><unknown>msg.toFixed(2));
  }
  return msg
}
echo(222);//222.00
echo("222")//3