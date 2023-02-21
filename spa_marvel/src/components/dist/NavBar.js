"use strict";
exports.__esModule = true;
var react_1 = require("react");
// fontawesome 
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
//img
var logo_marvel_png_1 = require("../img/logo-marvel.png");
var user_jpg_1 = require("../img/user.jpg");
require("./NavBar.css");
var NavBar = function () {
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var handleCaretClick = function () {
        setMenuOpen(!menuOpen);
    };
    return (react_1["default"].createElement("nav", { className: "navbar absolute top-0 left-0 grid grid-cols-2 w-full p-8" },
        react_1["default"].createElement("div", { className: "justify-self-start grid grid-cols-2 gap-4 items-center" },
            react_1["default"].createElement("img", { src: logo_marvel_png_1["default"], alt: "logo marvel" }),
            react_1["default"].createElement("ul", { className: "grid grid-flow-col gap-4" },
                react_1["default"].createElement("li", { className: "font-bold" }, "Inicio"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#comics" }, "Quadrinhos")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#movies" }, "Filmes")))),
        react_1["default"].createElement("div", { className: "justify-self-end flex justify-items-end items-center" },
            react_1["default"].createElement("form", { className: "relative w-64" },
                react_1["default"].createElement("input", { className: "w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100", type: "text", placeholder: "t\u00EDtulos, autor, g\u00EAnero" }),
                react_1["default"].createElement("button", { className: "search absolute right-0 py-1 px-2 ", onClick: function (e) { return e.preventDefault(); } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSearch }))),
            react_1["default"].createElement("div", { className: "relative flex ml-4" },
                react_1["default"].createElement("img", { src: user_jpg_1["default"], alt: "Foto do usu\u00E1rio", onClick: handleCaretClick }),
                react_1["default"].createElement("button", { onClick: handleCaretClick },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "ml-2", icon: free_solid_svg_icons_1.faCaretDown })),
                react_1["default"].createElement("ul", { className: "absolute mt-10 top-0 right-0 w-32 bg-black rounded p-4 transition-all duration-500 ease-in-out " + (!menuOpen && "opacity-0 invisible") },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#account", onClick: handleCaretClick }, "Minha Conta")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#logout", onClick: handleCaretClick }, "Sair")))))));
};
exports["default"] = NavBar;
