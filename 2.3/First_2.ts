export{}
enum Days{Sun,Mon,Tue,Web,Thu,Fri,Sat}
console.log(Days["Sun"]===0)//true
console.log(Days[2]==="Tue")//true
console.log('------------------------')
enum Days1{Sun=1,Mon=2,Tue=3,Web=4,Thu=5,Fri,Sat}
console.log(Days1["Fri"])
console.log(Days1["Sat"]===7)
console.log('------------------------')
enum Days2{Sun=1,Mon=2,Tue=4,Web=3,Thu,Fri,Sat}
console.log(Days2[4])//Thu
console.log(Days2["Thu"])//4
console.log(Days2["Tue"])//4
console.log('------------------------')
enum Days3{Sun=<any>"S",Mon=2,Tue=4,Web,Thu,Fri,Sat}
console.log(typeof(Days3["Sun"]));
const enum Directions{
    Up,
    Down,
    Left,
    Right
}
let directions: Directions=Directions.Down
console.log(directions)
let ss:number=Number(123)
console.log(typeof(ss))
console.log("any和object对比")
let notSure : any=4
// notSure.ifItExists()
// notSure.toFixed()
let prottySure:Object=4;
// prottySure.toFixed();
console.log(typeof(prottySure))

