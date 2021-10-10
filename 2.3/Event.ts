type EventNames = 'click'|'dbclick'|'mousemove'
function handleEvent(ele :Element,event:EventNames){
  console.log(event)
}
let ele:any=document.getElementById('div')
handleEvent(ele,'click');
handleEvent(ele,'dbclick');
handleEvent(ele,'mousemove');
// handleEvent(ele,'scroll')