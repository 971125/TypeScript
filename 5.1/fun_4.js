var obj = {
    x: 99
};
var foo = {
    getV: function (y) {
        return this.x + y;
    }
};
var newFunc = foo.getV.bind(obj, 2);
var a = newFunc();
console.log(a);
