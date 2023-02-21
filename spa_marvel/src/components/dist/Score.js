"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Score.css");
var Score = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 5 : _b;
    var getBorderColor = function () {
        if (value >= 7) {
            return "border-green-400";
        }
        else if (value > 4 && value < 7) {
            return "border-yellow-400";
        }
        else {
            return "border-red-400";
        }
    };
    return (react_1["default"].createElement("span", { className: "score inline-block mx-2 py-1 px-2 border-4 bg-black bg-opacity-75 rounded-full " + getBorderColor() }, value));
};
exports["default"] = Score;
