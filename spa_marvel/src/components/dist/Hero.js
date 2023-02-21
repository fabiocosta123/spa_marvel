"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var wallpaper_jpg_1 = require("../img/wallpaper.jpg");
require("./Hero.css");
var Hero = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Comics Marvel" : _b, _c = _a.score, score = _c === void 0 ? 10 : _c;
    var getBorderColor = function () {
        if (score >= 7) {
            return "border-green-400";
        }
        else if (score > 4 && score < 7) {
            return "border-yellow-400";
        }
        else {
            return "border-red-400";
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("header", { className: "relative min-h-screen -mb-64" },
            react_1["default"].createElement("img", { className: "object-cover object-center h-full", src: wallpaper_jpg_1["default"], alt: "Marvel wallpaper" }),
            react_1["default"].createElement("div", { className: "absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black" }),
            react_1["default"].createElement("article", { className: "absolute bottom-0 py-64 px-8" },
                react_1["default"].createElement("p", { className: "text-1xl" }, "Leia Agora"),
                react_1["default"].createElement("h2", { className: "text-3xl font-bold" }, title),
                react_1["default"].createElement("p", { className: "text-base" },
                    "Nota ",
                    react_1["default"].createElement("span", { className: "inline-block mx-2 py-1 px-2 border-4 bg-black bg-opacity-75 rounded-full " + getBorderColor() }, score)),
                react_1["default"].createElement("button", { className: "text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "mr-2", icon: free_solid_svg_icons_1.faPlay }),
                    " Ler"),
                react_1["default"].createElement("button", { className: "text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "mr-2", icon: free_solid_svg_icons_1.faPlus }),
                    "Minha Lista")))));
};
exports["default"] = Hero;
