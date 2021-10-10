// 返回值为函数
enum Func{
  SUM,
  MULTI
}

function getFunc(funs :Func){
  if(funs === Func.SUM){
    return function(score : number[]){
      let sum=0;
      for(let i of score){
        sum+=i
      }
      return sum;
    }
  }
  else if (funs === Func.MULTI){
    return function(score: number[]){
      let rest=1;
      for(let i of score){
        rest *= i;
      }
      return rest
    }
  }
  else{
    throw new Error("不支持此参数")
  }
}

let arg =Func.SUM
let func=getFunc(arg);
console.log(func([1,2,3,4]))//10
func =getFunc(Func.MULTI)
console.log(func([1,2,3,4]))//24