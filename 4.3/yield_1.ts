export{}
function * getIterator(items){
  let len=items.length;
  for(let i=0;i<len;i++){
    yield items[i]
  }
}
let iterator =getIterator([1,2,3,4])
console.log(iterator.next())//{value:1,done:false}
console.log(iterator.next())//{value:2,done:false}
console.log(iterator.next())//{value:3,done:false}
console.log(iterator.next())//{value:4,done:false}
console.log(iterator.next())//{value:undefined,done:true}