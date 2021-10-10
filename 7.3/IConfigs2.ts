class Rect{
  height : number =100;
  width : number = 200;
  learn?(){
    console.log("learning")
  }
}
interface IConfigs extends Rect{
  name:string;
}
function load(config : IConfigs){
  console.log(config.name);
}
load({name:"svg",height:180,width:200}) //svg