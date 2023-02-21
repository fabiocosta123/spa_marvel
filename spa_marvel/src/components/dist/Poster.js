"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Score_1 = require("./Score");
require("./Poster.css");
var Poster = function (_a, index) {
    var cover = _a.cover, title = _a.title, score = _a.score;
    return (react_1["default"].createElement("article", { className: "relative transition-all duration-500 ease-in-out transform hover:scale-110", key: index },
        react_1["default"].createElement("img", { src: cover, alt: title }),
        react_1["default"].createElement("div", { className: "poster absolute cursor-pointer inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlayCircle, size: "3x" }),
            react_1["default"].createElement("h2", { className: "text-2xl hover: z-10" }, title),
            react_1["default"].createElement(Score_1["default"], { value: score }))));
};
exports["default"] = Poster;
