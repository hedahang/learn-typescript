"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var db_1 = require("../modules/db");
//定义数据库的映射
var UserClass = /** @class */ (function () {
    function UserClass(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MySqlDb();
exports.UserModel = UserModel;
