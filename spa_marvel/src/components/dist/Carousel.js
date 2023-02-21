"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_slick_1 = require("react-slick");
var mockData_1 = require("../data/mockData");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./Carousel.css");
var Poster_1 = require("./Poster");
var Carousel = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Comics em Destaque" : _b, _c = _a.data, data = _c === void 0 ? mockData_1["default"] : _c;
    var Direction;
    (function (Direction) {
        Direction[Direction["left"] = 0] = "left";
        Direction[Direction["right"] = 1] = "right";
    })(Direction || (Direction = {}));
    var SlickArrow = function (_a) {
        var direction = _a.direction, onClick = _a.onClick;
        return (react_1["default"].createElement("button", { type: "button", className: "absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 " + (direction ? "right-0" : "left-0"), onClick: onClick },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: direction ? free_solid_svg_icons_1.faChevronRight : free_solid_svg_icons_1.faChevronLeft, size: "2x" })));
    };
    var options = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 9,
        vaiableWidth: true,
        prevArrow: react_1["default"].createElement(SlickArrow, { direction: Direction.left }),
        nextArrow: react_1["default"].createElement(SlickArrow, { direction: Direction.right })
    };
    return (react_1["default"].createElement("section", { className: "carousel" },
        react_1["default"].createElement("h2", { className: "relative z-10 font-bold text-2xl ml-8 mb-2" }, title),
        react_1["default"].createElement(react_slick_1["default"], __assign({ className: "relative mb-4" }, options), data.map(function (comic, index) { return Poster_1["default"](comic, index); }))));
};
exports["default"] = Carousel;
