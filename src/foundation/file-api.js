import { requests } from './foundation.js';
import axios from 'axios';

function getContext()
{
    return requests(
        {
            url: "/notebooks/",
            type: "get",
            contentType: "text/html",
            responsetype: "text"
        }
    );
}

function upLoad(params)
{
    return requests(
        {
            url: "/notebooks/",
            method: "post",
            data: { // get用params，post用data
                "filename": params[0],
                "txt": params[1]
            },
            headers: {  
                'Content-Type': 'multipart/form-data',//'application/json'
            },
        }
    );
}

export {getContext, upLoad};