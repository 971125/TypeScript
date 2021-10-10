"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.walk = function () {
        console.log(this.name + "walk.....");
    };
    ;
    Person.prototype.eat = function () {
        console.log(this.name + "eating");
    };
    ;
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, clazz) {
        var _this = _super.call(this, name, age) || this;
        _this.clazz = clazz;
        return _this;
    }
    ;
    Student.prototype.learn = function () {
        console.log(this.name + "learing");
    };
    ;
    Student.prototype.display = function () {
        console.log(JSON.stringify(this));
    };
    ;
    return Student;
}(Person));
var HighSchoolStuddent = /** @class */ (function (_super) {
    __extends(HighSchoolStuddent, _super);
    function HighSchoolStuddent(name, age, clazz) {
        var _this = _super.call(this, name, age, clazz) || this;
        _this.clazz = clazz;
        return _this;
    }
    ;
    HighSchoolStuddent.prototype.goNCEE = function () {
        console.log(this.name + "take NCEE");
    };
    ;
    return HighSchoolStuddent;
}(Student));
var studentA = new HighSchoolStuddent("Jack", 17, "高三一班");
studentA.walk(); //Jackwalk
studentA.learn(); //Jacklearing
studentA.goNCEE(); //Jacktake NCEE
studentA.display(); //{"name":"Jack","age":17,"clazz":"高三一班"}
var StudentB = studentA;
StudentB.display();
studentA.walk();
