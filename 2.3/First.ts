// 第一个Ts程序(注释用于代码提示)
/*@param <msg>
*@return (string)
*/
export{}
function hello(msg:string):string{
    return "Hello,"+msg;
}
var msg:string="My First TypeScript";
 //document.body.innerHTML=hello(msg);


//  整型
 let num1:number=89.2;
 let num2:number=2;
// 布尔值
let isMan:boolean=true;
let isBoy:boolean=false;
// let a : boolean=new Boolean(1)
let b : boolean=Boolean(0)
console.log(b)
let c="\"hello\"";
console.log(c)
let name:string="Jack"
let age:number=20
let mm:String=`今年${name}已经${age}岁了`
console.log(mm)
enum Days {Sun,Mon,Tue,Web,Thu,Fri,Sat};
let today: Days=Days.Sat;
console.log(today)