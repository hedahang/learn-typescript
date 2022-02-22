"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDb = void 0;
//定义一个操作mysql数据库的类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log("数据库建立连接");
    }
    MySqlDb.prototype.add = function (info) {
        console.log("添加数据成功：" + JSON.stringify(info));
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        console.log("更新数据id:" + id + "成功：" + JSON.stringify(info));
        return true;
    };
    MySqlDb.prototype.delete = function (id) {
        console.log("删除数据id:" + id + "成功");
        return true;
    };
    MySqlDb.prototype.get = function (id) {
        console.log("获取数据id:" + id + "成功");
        return [
            {
                title: "xxxx",
            },
        ];
    };
    return MySqlDb;
}());
exports.MySqlDb = MySqlDb;
