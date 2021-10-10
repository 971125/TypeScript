export{}
interface IConfigs{
  name:string;
  height?:number,
  width?:number;
  learn?();
}
function load(config:IConfigs){
  console.log(config.name)
}
load({name:"div",height:180})
load({name:"svg",height:180,width:200})
load({name:"html",height:180,width:200,
learn:() => {
  console.log("learning")
  
}
})