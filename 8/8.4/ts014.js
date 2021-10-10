function getProperty(obj, key) {
    return obj[key];
}
var obj = { a: 1, b: 2, c: 3, d: 4 };
var x = getProperty(obj, "a");
console.log(x);
// let m=getProperty(obj,"m") 报错
