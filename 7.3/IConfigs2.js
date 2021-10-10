var Rect = /** @class */ (function () {
    function Rect() {
        this.height = 100;
        this.width = 200;
    }
    Rect.prototype.learn = function () {
        console.log("learning");
    };
    return Rect;
}());
function load(config) {
    console.log(config.name);
}
load({ name: "svg", height: 180, width: 200 });
