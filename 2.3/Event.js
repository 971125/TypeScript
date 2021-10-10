function handleEvent(ele, event) {
    console.log(event);
}
var ele = document.getElementById('div');
handleEvent(ele, 'click');
handleEvent(ele, 'dbclick');
handleEvent(ele, 'mousemove');
// handleEvent(ele,'scroll')
