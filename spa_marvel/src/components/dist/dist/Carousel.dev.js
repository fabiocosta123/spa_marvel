"use strict";

//"use strict";
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

var react_slick_1 = require("react-slick");

var mockData_1 = require("../data/mockData");

var Carousel = function Carousel(_a) {
  var _b = _a.data,
      data = _b === void 0 ? mockData_1["default"] : _b;
  var options = {
    infinite: true,
    slideToScroll: 1,
    slideToShow: 10
  };
  return react_1["default"].createElement(react_slick_1["default"], __assign({}, options), data.map(function (_a) {
    var cover = _a.cover,
        title = _a.title;
    return react_1["default"].createElement("article", null, react_1["default"].createElement("img", {
      src: cover,
      alt: title
    }));
  }), ";");
};

exports["default"] = Carousel;