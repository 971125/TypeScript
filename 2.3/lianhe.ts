function padLeft(value:string,padding:number|string|boolean){
    if(typeof padding ==="number"){
        return Array(padding+1).join(" ")+value;
    }
    if(typeof padding ==="string"){
        return padding+value;
    }
    throw new Error(`参数string或number,但传入${padding}`)
}
console.log(padLeft("Hello world",3))
console.log(padLeft("Hello world","____"))
// console.log(padLeft("Hello world",true))