"use strict";

var MyElement = /** @class */ (function () {
    function MyElement(author, name) {
        this.author = "Jack";
        this.name = "myele";
        this.author = author;
        this.name = name;
    }
    MyElement.prototype.tostring = function () {
        return JSON.stringify(this);
    };
    return MyElement;
}());
var e = new MyElement("jack", "div");
console.log(e.tostring());
