export{}
function echo <T> (msg:T) : T{
  console.log(msg);
  return msg;
}
let ret = echo("Hello World");
console.log(typeof ret);

let ret_1=echo <string> ("hhhhh")
console.log(typeof ret_1)