"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// require("reflect-metadata");
var Hello3 = /** @class */ (function () {
    function Hello3(message) {
        this.greeting = message;
    }
    Hello3.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        logType
    ], Hello3.prototype, "greeting");
    return Hello3;
}());
function logType(target, key) {
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(key + " type: " + target);
}
var hello3 = new Hello3("TypeScript !");
hello3.greet();
