//生成器

function *  getInterator(){
  yield 1;
  yield 2;
  yield 3;
}
//调用生成器，返回迭代器
let iterator =getInterator();
console.log(iterator.next())//{value:1,done:false}
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
