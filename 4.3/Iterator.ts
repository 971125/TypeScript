export{}
function getInterator(items){
  let i=0;
  return{
    next:function(){
      var done =(i>=items.length)
      var value=!done?items[i++]:undefined
      return{
        done:done,
        value:value
      };
    }
  };
}
let iterator =getInterator([1,2,3,4,5])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())