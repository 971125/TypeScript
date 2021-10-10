var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.dirverOnRoad = function () {
        console.log("can driver on road");
    };
    return Car;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.dirverInWater = function () {
        console.log("can driver in water");
    };
    return Ship;
}());
var car = new Car();
var ship = new Ship();
var canShip = {};
canShip["dirverOnRoad"] = car["dirverOnRoad"];
canShip["dirverInWater"] = ship["dirverInWater"];
canShip.dirverInWater();
canShip.dirverOnRoad();
