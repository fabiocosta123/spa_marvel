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
var Poster = function (_a, index) {
    var cover = _a.cover, title = _a.title;
    return (react_1["default"].createElement("article", { key: index },
        react_1["default"].createElement("img", { src: cover, alt: title })));
};
var Carousel = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Carousel" : _b, _c = _a.data, data = _c === void 0 ? mockData_1["default"] : _c;
    var options = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 10,
        vaiableWidth: true
    };
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("h2", null, title),
        react_1["default"].createElement(react_slick_1["default"], __assign({}, options), data.map(function (comic, index) { return Poster(comic, index); }))));
};
exports["default"] = Carousel;
