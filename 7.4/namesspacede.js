var com;
(function (com) {
    var wyd;
    (function (wyd) {
        var demo;
        (function (demo) {
            var Man = /** @class */ (function () {
                function Man(id, name) {
                    this.id = "";
                    this.name = "";
                    this.name = name;
                    this.id = id;
                }
                Man.prototype.learn = function () {
                    console.log(this.name + " learning");
                };
                return Man;
            }());
            demo.Man = Man;
        })(demo = wyd.demo || (wyd.demo = {}));
    })(wyd = com.wyd || (com.wyd = {}));
})(com || (com = {}));
var man = new com.wyd.demo.Man("001", "jack");
man.learn();
