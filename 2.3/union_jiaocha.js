"use strict";
exports.__esModule = true;
var Car_1 = /** @class */ (function () {
    function Car_1() {
    }
    Car_1.prototype.driverOnRoad = function () {
        console.log("can driver on road");
    };
    Car_1.prototype.toUpper = function (str) {
        return str.toUpperCase();
    };
    return Car_1;
}());
var Ship_1 = /** @class */ (function () {
    function Ship_1() {
    }
    Ship_1.prototype.driverInWater = function () {
        console.log("can driver in water");
    };
    Ship_1.prototype.toUpper = function (str) {
        return str.toUpperCase();
    };
    return Ship_1;
}());
var car_1 = new Car_1();
var ship_1 = new Ship_1();
var carShip_1 = {};
carShip_1["driverOnRoad"] = car_1["driverOnRoad"];
carShip_1["driverInWater"] = ship_1["driverInWater"];
carShip_1["toUpper"] = ship_1["toUpper"];
var str = carShip_1.toUpper("hello World");
console.log(str); //HELLO WORLD
carShip_1.driverOnRoad(); //can driver on road
carShip_1.driverInWater(); //can driver in water
