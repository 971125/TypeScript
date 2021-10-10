//返回学生信息  返回元组
export{}
function getStudentInfo(code : string){
  let table=[];
  for (let i=0;i<10;i++){
    table.push([]);
    let tupl :[string,string,number]=["","语文",0]
    tupl[0]="00"+i;
    tupl[1]="语文"
    tupl[2]=parseFloat((100*Math.random()).toFixed(1));
    table[i]=tupl
  }
  console.log(table)
  let len=table.length
  for(let i=0;i<len;i++){
    if(table[i][0]===code)
    return table[i]
  }
  return null;
}
let arg=getStudentInfo("002")
console.log(arg)
