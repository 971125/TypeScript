function getProperty <T,K extends keyof T>(obj:T, key:K){
  return obj[key];
}
let obj={a : 1, b : 2, c : 3,d : 4};
let x=getProperty(obj,"a");
console.log(x);
// let m=getProperty(obj,"m") 报错