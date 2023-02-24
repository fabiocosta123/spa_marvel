"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Score_1 = require("./Score");
var wallpaper_jpg_1 = require("../img/wallpaper.jpg");
require("./Hero.css");
var Hero = function (_a) {
    var _b = _a.thumbnail, thumbnail = _b === void 0 ? wallpaper_jpg_1["default"] : _b, _c = _a.title, title = _c === void 0 ? "Comics" : _c, _d = _a.score, score = _d === void 0 ? 10 : _d;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("header", { className: "box-border relative min-h-screen -mb-64" },
            react_1["default"].createElement("img", { className: "object-cover object-center h-auto w-full", src: thumbnail, alt: "Marvel wallpaper" }),
            react_1["default"].createElement("div", { className: "absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black" }),
            react_1["default"].createElement("article", { className: "absolute bottom-0 mb-64 px-8" },
                react_1["default"].createElement("p", { className: "text-3xl" }, "Leia Agora"),
                react_1["default"].createElement("h2", { className: "text-6xl font-bold" }, title),
                react_1["default"].createElement("p", { className: "text-base" },
                    "Nota ",
                    "",
                    react_1["default"].createElement(Score_1["default"], { value: score })),
                react_1["default"].createElement("button", { className: "text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "mr-2", icon: free_solid_svg_icons_1.faPlay }),
                    " Ler"),
                react_1["default"].createElement("button", { className: "text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "mr-2", icon: free_solid_svg_icons_1.faPlus }),
                    "Minha Lista")))));
};
exports["default"] = Hero;
