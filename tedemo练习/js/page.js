var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerHTML = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
})(Components || (Components = {}));
var Xiao = /** @class */ (function () {
    function Xiao(_age) {
        this._age = _age;
    }
    Object.defineProperty(Xiao.prototype, "age", {
        get: function () {
            return this._age - 10;
        },
        set: function (age) {
            this._age = age + 3;
        },
        enumerable: false,
        configurable: true
    });
    return Xiao;
}());
var dajiao = new Xiao(28);
dajiao.age = 25;
console.log(dajiao.age);
var Girls = /** @class */ (function () {
    function Girls() {
    }
    Girls.sayLove = function () {
        return "I see you";
    };
    return Girls;
}());
console.log(Girls.sayLove());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = new Person("张三");
// person.name = "李白";
console.log(person.name);
// 抽象类
var Girl = /** @class */ (function () {
    function Girl() {
    }
    return Girl;
}());
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Water.prototype.skill = function () {
        console.log("大爷，请喝水！");
    };
    return Water;
}(Girl));
var BaseTeacher = /** @class */ (function (_super) {
    __extends(BaseTeacher, _super);
    function BaseTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacher.prototype.skill = function () {
        console.log("大爷，来个泰式按摩吧！");
    };
    return BaseTeacher;
}(Girl));
var seniorTeacher = /** @class */ (function (_super) {
    __extends(seniorTeacher, _super);
    function seniorTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    seniorTeacher.prototype.skill = function () {
        console.log("大爷，来个SPA全身按摩吧！");
    };
    return seniorTeacher;
}(Girl));
function judgeWho(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWhoTwo(animal) {
    if ("skill" in animal) {
        animal.skill();
    }
    if ("say" in animal) {
        animal.say();
    }
}
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
var NumberObj = /** @class */ (function () {
    function NumberObj() {
    }
    return NumberObj;
}());
function addObj(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    else {
        return 0;
    }
}
var Status;
(function (Status) {
    Status[Status["MASSAGE"] = 0] = "MASSAGE";
    Status[Status["SPA"] = 1] = "SPA";
    Status[Status["DABAOJIAN"] = 2] = "DABAOJIAN";
})(Status || (Status = {}));
function getServe(status) {
    if (status === Status.MASSAGE) {
        return "massage";
    }
    else if (status === Status.SPA) {
        return "SPA";
    }
    else if (status === Status.DABAOJIAN) {
        return "dabaojian";
    }
}
var result = getServe(Status.SPA);
console.log(Status.MASSAGE, Status[1]);
console.log(result);
function join(first, second) {
    return "" + first + second;
}
console.log(join(2, 1));
function myFun(params) {
    return params;
}
console.log(myFun(["123", "456"]));
function myFun2(params, name) {
    return params + "+" + name;
}
console.log(myFun2("123", 456));
var SelectGirls = /** @class */ (function () {
    function SelectGirls(girls) {
        this.girls = girls;
    }
    SelectGirls.prototype.getGrils = function (index) {
        return this.girls[index];
    };
    return SelectGirls;
}());
var selectGirl = new SelectGirls(["大脚", "刘英", "晓红", "小月"]);
console.log(selectGirl.getGrils(1));
var SelectGirlsTwo = /** @class */ (function () {
    function SelectGirlsTwo(girls) {
        this.girls = girls;
    }
    SelectGirlsTwo.prototype.getGrils = function (index) {
        return this.girls[index].name;
    };
    return SelectGirlsTwo;
}());
var selectGirlTwo = new SelectGirlsTwo([
    { name: "大脚" },
    { name: "刘英" },
    { name: "晓红" },
    { name: "小月" },
]);
console.log(selectGirlTwo.getGrils(3));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
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
http.getData(); // "http://www.baidu.com "
