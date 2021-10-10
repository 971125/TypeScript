"use strict";
exports.__esModule = true;
function getLength(a) {
    // if((a as string).length){
    if (a.length) {
        return a.length;
    }
    else {
        return a.toString.length;
    }
}
console.log(getLength(5)); //1
console.log(getLength("hello")); //5
