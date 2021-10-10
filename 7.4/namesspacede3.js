var com;
(function (com) {
    var wyd;
    (function (wyd) {
        //嵌套时 export不可少
        var nested;
        (function (nested) {
            function callNS() {
                var man = new demo.Man("001", "jack");
            }
            nested.callNS = callNS;
        })(nested = wyd.nested || (wyd.nested = {}));
    })(wyd = com.wyd || (com.wyd = {}));
})(com || (com = {}));
var myNs = com.wyd.nested;
com.wyd.nested.callNS();
myNs.callNS();
