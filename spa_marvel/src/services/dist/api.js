"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var md5_1 = require("md5");
//const baseURL = "https://gateway.marvel.com:443/v1/public";
var ts = Number(new Date());
var privateKey = "e404de82f7e2c4f95f89fdeb323754129fbc6228";
var publicKey = "1958ce7ec28d260a9708f4547727812a";
var hash = md5_1["default"](ts + privateKey + publicKey);
var api = axios_1["default"].create({
    baseURL: "http://gateway.marvel.com/v1/public",
    params: {
        ts: ts,
        apikey: publicKey,
        hash: hash
    }
});
exports["default"] = api;
