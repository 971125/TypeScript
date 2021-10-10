class Car{
    public dirverOnRoad(){
        console.log("can driver on road")
    }
}
class Ship{
    public dirverInWater(){
       console.log("can driver in water") 
    }
}
let car=new Car();
let ship=new Ship();
let canShip : Car&Ship =<Car&Ship> {};//使用{}进行初始化
canShip["dirverOnRoad"]=car["dirverOnRoad"]
canShip["dirverInWater"]=ship["dirverInWater"]
canShip.dirverInWater();//can driver in water
canShip.dirverOnRoad();// can driver on road