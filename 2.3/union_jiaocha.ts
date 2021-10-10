export{}
class Car_1{
    public driverOnRoad(){
        console.log("can driver on road")
    }
    public toUpper(str:string){
        return str.toUpperCase();
    }
}
class Ship_1{
    public driverInWater(){
        console.log("can driver in water")
    }
    public toUpper(str:string){
        return str.toUpperCase()
    }
}
let car_1=new Car_1()
let ship_1=new Ship_1()
let carShip_1 : any = <Car_1|Ship_1> {}
carShip_1["driverOnRoad"]=car_1["driverOnRoad"]
carShip_1["driverInWater"]=ship_1["driverInWater"]
carShip_1["toUpper"]=ship_1["toUpper"];
let str:string=carShip_1.toUpper("hello World");
console.log(str);//HELLO WORLD
(<Car_1>carShip_1).driverOnRoad();//can driver on road
(<Ship_1>carShip_1).driverInWater();//can driver in water