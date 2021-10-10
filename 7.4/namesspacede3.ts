/// <reference path="namesspacede.ts"/>
namespace com.wyd{
  //嵌套时 export不可少
  export namespace nested{
    export function callNS(){
      let man=new com.wyd.demo.Man("001","jack")
    }
  }
}
import myNs=com.wyd.nested;
com.wyd.nested.callNS()
myNs.callNS()