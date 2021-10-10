function error(message : string): never{
    throw new Error(message)
}
// 返回never的函数必须存在无法结束
function infinit() : never{
    while(true){

    }
}

// Symbol类型

let s1=Symbol("name")
let s2=Symbol("age")
console.log(s1) //Symbol(name)
console.log(s2) //Symbol(age)
console.log(s1.toString()) //"Symbol(name)"
console.log(s2.toString()) //"Symbol(age)"

// 没有参数的情况
let a=Symbol()
let b=Symbol()
console.log(a === b)//false
// 有参数的情况
let s3=Symbol('age')
let s4=Symbol('name')
console.log(s3===s4)//false

// Symbol类型作为对象属性名
let sym=Symbol("name");
let sym1=Symbol("name");
let obj={
    [sym]:"value",
    [sym1]:"value2",
    name:"value3"
}
console.log(obj)

