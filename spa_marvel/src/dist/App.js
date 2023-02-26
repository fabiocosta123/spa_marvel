"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Comics_1 = require("./Characteres/Comics");
//components
var Hero_1 = require("./components/Hero");
var NavBar_1 = require("./components/NavBar");
var Carousel_1 = require("./components/Carousel");
// react-slick 
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var App = function () {
    return (react_1["default"].createElement("div", { className: "m-auto antialiased font-sans text-center bg-black text-white" },
        react_1["default"].createElement(Hero_1["default"], null),
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(Carousel_1["default"], null),
        react_1["default"].createElement(Carousel_1["default"], null),
        react_1["default"].createElement(Comics_1["default"], null)));
};
exports["default"] = App;
