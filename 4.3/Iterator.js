"use strict";
exports.__esModule = true;
function getInterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
var iterator = getInterator([1, 2, 3, 4, 5]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
