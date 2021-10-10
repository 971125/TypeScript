export{}
function getLength(a:string|number):number{
  // if((a as string).length){
    if((<string>a).length){
      return (<string>a).length
    }else{
      return a.toString.length
    }
  
}
console.log(getLength(5))//1
console.log(getLength("hello"))//5