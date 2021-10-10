// 可选参数
  function func(a:string,b?:string){
    if(b === undefined){
      b=""
    }
    return a+""+b
  }
  let result1=func("Jack")
  // let result2=func("Jack","Adams",undefined) 报错
  let result3=func("Jack","Adams")
  // let result4=func("Jack",2); 报错

  // Rest参数
    function func_1(a:string,...b:string[]){
      if(b === undefined){
        b=[]
      }
      return a+""+b
    }
    let result1_1=func_1("Jack");
    let result1_2=func_1("Jack","Adams",undefined)
    let result1_3=func_1("Jack","Adama","Smith")
  //默认参数
    