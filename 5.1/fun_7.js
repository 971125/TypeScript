var add = function (a, b) {
    return a + b;
};
var multi = function (a, b) {
    return a * b;
};
function calc(fn, c, d) {
    return fn(c, d);
}
console.log(calc(add, 4, 2));
console.log(calc(multi, 4, 2));
