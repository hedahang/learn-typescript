"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 属性装饰器
function logProperty(params) {
    return function (target, attr) {
        console.log(target); // 类的原型对象: {getData: ƒ, constructor: ƒ}
        console.log(attr); // apiUrl
        target[attr] = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    __decorate([
        logProperty("http://www.baidu.com")
    ], HttpClient.prototype, "apiUrl", void 0);
    return HttpClient;
}());
var http = new HttpClient();
http.getData(); // "http://www.baidu.com"
