// 返回值为函数
var Func;
(function (Func) {
    Func[Func["SUM"] = 0] = "SUM";
    Func[Func["MULTI"] = 1] = "MULTI";
})(Func || (Func = {}));
function getFunc(funs) {
    if (funs === Func.SUM) {
        return function (score) {
            var sum = 0;
            for (var _i = 0, score_1 = score; _i < score_1.length; _i++) {
                var i = score_1[_i];
                sum += i;
            }
            return sum;
        };
    }
    else if (funs === Func.MULTI) {
        return function (score) {
            var rest = 1;
            for (var _i = 0, score_2 = score; _i < score_2.length; _i++) {
                var i = score_2[_i];
                rest *= i;
            }
            return rest;
        };
    }
    else {
        throw new Error("不支持此参数");
    }
}
var arg = Func.SUM;
var func = getFunc(arg);
console.log(func([1, 2, 3, 4]));
func = getFunc(Func.MULTI);
console.log(func([1, 2, 3, 4]));
