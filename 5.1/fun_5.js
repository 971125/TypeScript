"use strict";
exports.__esModule = true;
function getStudentInfo(code) {
    var table = [];
    for (var i = 0; i < 10; i++) {
        table.push([]);
        var tupl = ["", "语文", 0];
        tupl[0] = "00" + i;
        tupl[1] = "语文";
        tupl[2] = parseFloat((100 * Math.random()).toFixed(1));
        table[i] = tupl;
    }
    console.log(table);
    var len = table.length;
    for (var i = 0; i < len; i++) {
        if (table[i][0] === code)
            return table[i];
    }
    return null;
}
var arg = getStudentInfo("002");
console.log(arg);
