var config = { url: '/post', data: 'id=2' };
var str = jTools.toString(config);
jTools.$("mydiv").innerHTML = str;
console.log(str);
