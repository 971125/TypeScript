var MyElement = /** @class */ (function () {
    function MyElement() {
        this.width = 300;
        this.height = 200;
        this.id = "";
        this.name = "myele";
    }
    MyElement.prototype.tostring = function () {
        return JSON.stringify(this);
    };
    return MyElement;
}());
var a = new MyElement();
console.log(a.tostring());
