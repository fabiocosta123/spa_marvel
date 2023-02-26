import React, { useState } from "react";
import axios from "axios";

import api from "../services/api"

interface ResponseData {
    id: string;
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string;
    }
}
const Comics = () => {

    const [comics, setComics] = useState<ResponseData[]>([]);

    api.get("/comics").then(response => {setComics(response.data.data.results)})
        .catch(err => console.log(err))
    return (
        <h1>rsrsrsr</h1>
    ) 
}   
export default Comics;
