var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Hello2 = /** @class */ (function () {
    function Hello2(message) {
        this.greeting = message;
    }
    Hello2.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        writable(false)
    ], Hello2.prototype, "greet");
    return Hello2;
}());
function writable(value) {
    return function (target, propertykey, descriptor) {
        console.log("=========start=======");
        console.log(propertykey);
        console.log(target);
        console.log(descriptor);
        console.log("=========end========");
    };
}
var hello2 = new Hello2("TypeScript!");
hello2.greet();
