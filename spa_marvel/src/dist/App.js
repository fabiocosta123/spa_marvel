"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var md5_1 = require("md5");
//components
var Hero_1 = require("./components/Hero");
var NavBar_1 = require("./components/NavBar");
var Carousel_1 = require("./components/Carousel");
// react-slick 
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
//const baseURL = "https://gateway.marvel.com:443/v1/public";
var ts = Number(new Date());
var privateKey = "e404de82f7e2c4f95f89fdeb323754129fbc6228";
var publicKey = "1958ce7ec28d260a9708f4547727812a";
var hash = md5_1["default"](ts + privateKey + publicKey);
//(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
var App = function () {
    react_1.useEffect(function () {
        axios_1["default"].get("https://gateway.marvel.com:443/v1/public/comics?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash)
            .then(function (response) { return console.log(response); })["catch"](function (err) { return console.log(err); });
    }, []);
    return (react_1["default"].createElement("div", { className: "m-auto antialiased font-sans text-center bg-black text-white" },
        react_1["default"].createElement(Hero_1["default"], null),
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(Carousel_1["default"], null),
        react_1["default"].createElement(Carousel_1["default"], null)));
};
exports["default"] = App;
