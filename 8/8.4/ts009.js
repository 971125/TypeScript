"use strict";
exports.__esModule = true;
exports.GenericDAO = void 0;
var GenericDAO = /** @class */ (function () {
    function GenericDAO() {
    }
    GenericDAO.prototype.save = function (arg) {
        var ret = false;
        try {
            console.log("save to db");
            ret = true;
        }
        catch (e) {
            console.log(e);
            ret = false;
        }
        finally {
            return ret;
        }
    };
    return GenericDAO;
}());
exports.GenericDAO = GenericDAO;
