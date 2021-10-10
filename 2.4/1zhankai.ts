//函数动态参数
export{}
function add(...args){
  let num=0;
  for(let item of args){
    num+=item
  }
  return num
}
let arr=[1,2,3,4]
let args=add(arr)
let arg_1=add(...arr)
console.log(args)//01,2,3,4
console.log(arg_1)//10
//数组合并
let as=[1,2,3]
let a_1=[...as,4,5]
console.log(a_1)//1,2,3,4,5
// 赋值数组
let arra =[1,2,3]
let arrb=[...arra]
arrb.push(4)
console.log(arrb)//[1,2,3,4]
//解构赋值 展开运算符只能用在末尾
let [a,b,...arg3]=[1,2,3,4,5]
console.log(a)//1
console.log(b)//2
console.log(arg3)//[3,4,5]
//ES7中的展开运算符
let { ...argss}={a:1,b:2,c:3,d:4}

console.log(argss)