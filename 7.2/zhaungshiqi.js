"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello(message) {
        this.greeting = message;
    }
    Hello.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Hello = __decorate([
        log
    ], Hello);
    return Hello;
}());
function log(constructor) {
    console.log("======start=========");
    console.log("call constructor:  " + constructor.prototype.constructor.name);
    console.log("======end===========");
}
var hello = new Hello("TypeScript!");
hello.greet();
