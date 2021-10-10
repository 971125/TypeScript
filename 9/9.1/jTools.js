(function(jTools){
  jTools.version = "1.0.0";
  jTools.author = "jackwang";
  function toString(obj){
    return JSON.stringify(obj);
  }
  function $(id) {
    return document.getElementById(id)
  }
  jTools.toString = toString;
  jTools .$=$;
})(jTools = window.jTools || (window.jTools = {}))