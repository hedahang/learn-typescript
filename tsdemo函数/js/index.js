"use strict";
// 定义一个操作mysql数据库的类
// 注意：要实现泛型接口 这个类也应该是一个泛型类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log("数据库建立连接");
    }
    MySqlDb.prototype.add = function (info) {
        console.log("mysql", info);
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.get = function (id) {
        var list = [
            {
                id: id,
                title: "xxxx",
                desc: "xxxxxxxxxx",
            },
        ];
        return list;
    };
    return MySqlDb;
}());
// 定义一个操作mssql数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log("数据库建立连接");
    }
    MsSqlDb.prototype.add = function (info) {
        console.log("mssql", info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDb;
}());
var MongoDb = /** @class */ (function () {
    function MongoDb() {
        console.log("数据库建立连接");
    }
    MongoDb.prototype.add = function (info) {
        console.log("mongoDb", info);
        return true;
    };
    MongoDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb;
}());
//操作用户表   定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = "张三111";
u.password = "123456";
var oMySql = new MySqlDb();
oMySql.add(u);
console.log(oMySql.get(1));
var oMsSql = new MsSqlDb();
oMsSql.add(u);
var oMongoDb = new MongoDb();
oMongoDb.add(u);
