import React from "react";
import axios from "axios";
import md5 from "md5"


 //const baseURL = "https://gateway.marvel.com:443/v1/public";
 const ts = Number(new Date());
 const privateKey = "e404de82f7e2c4f95f89fdeb323754129fbc6228";
 const publicKey = "1958ce7ec28d260a9708f4547727812a";
 const hash = md5(ts + privateKey + publicKey);

 const api = axios.create ({
    baseURL: "http://gateway.marvel.com/v1/public",
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
 })

 export default api;