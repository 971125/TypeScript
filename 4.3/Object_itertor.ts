export{}
let obj={
  item:[1,2,3,4],
  *[Symbol.iterator](){
    for (let i of this.item){
      yield i
    }
  }
}
obj.item.push(5)
obj.item.push(6)
for(let num of obj){
  console.log(num)
}