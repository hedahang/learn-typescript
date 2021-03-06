"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Content = exports.Header = void 0;
var Header = /** @class */ (function () {
    function Header() {
        var elem = document.createElement("div");
        elem.innerHTML = "This is Header";
        document.body.appendChild(elem);
    }
    return Header;
}());
exports.Header = Header;
var Content = /** @class */ (function () {
    function Content() {
        var elem = document.createElement("div");
        elem.innerText = "This is Content";
        document.body.appendChild(elem);
    }
    return Content;
}());
exports.Content = Content;
var Footer = /** @class */ (function () {
    function Footer() {
        var elem = document.createElement("div");
        elem.innerText = "This is Footer";
        document.body.appendChild(elem);
    }
    return Footer;
}());
exports.Footer = Footer;
