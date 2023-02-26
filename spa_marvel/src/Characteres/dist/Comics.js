"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_1 = require("../services/api");
var Comics = function () {
    var _a = react_1.useState([]), comics = _a[0], setComics = _a[1];
    api_1["default"].get("/comics").then(function (response) { setComics(response.data.data.results); })["catch"](function (err) { return console.log(err); });
    return (react_1["default"].createElement("h1", null, "rsrsrsr"));
};
exports["default"] = Comics;
