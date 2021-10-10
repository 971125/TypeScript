let config = {url:'/post' , data:'id=2'}
let str =jTools.toString(config)
jTools.$("mydiv").innerHTML =str;
console.log(str);