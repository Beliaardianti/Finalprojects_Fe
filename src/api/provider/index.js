
import axios from "axios";
import { BASE_URL } from "utils";



export const PROVIDER_GET = async (pathUrl) => {
    const headers = {
        'Content-Type':'application/json',
    }
    const response = await axios.get(`${BASE_URL}/api/${pathUrl}`,{headers})
        .then((res) => {
            // console.log("STATUS RESPONSE : " + res.status);
            // console.log("DATA RESPONSE : " + res.data);
            switch (res.status) {
                case 200:
                    return res.data
                case 201:
                    return res.data
                case 403:
                    throw "forbidden"
                default:
                    console.log("error")
                    break;
            }
        }).catch(err => {
            throw err
        })

    return response
}

export const PROVIDER_POST = async (pathUrl, request) => {
    const headers = {
        'Content-Type':'application/json',
    }

    const response = await axios.post(`${BASE_URL}/api/${pathUrl}`,request,{headers})
        .then((res) => {
            console.log("STATUS E : " + res.status);
            switch (res.status) {
                case 200:
                    return res.data
                case 201:
                    return res.data
                default:
                    console.log("error1")
                    break;
            }
        }).catch(err => {
            console.log("STATUS E 2: " + err.response.status);
            switch (err.response.status) {
                case 400:
                    throw err.response.data
                case 401:
                    throw err.response.data
                case 403:
                    throw "forbidden"
                case 404:
                    throw err.response.data
                case 500:
                    throw err.response.data
                default:
                    console.log("error2")
                    break;
            }
        })

    return response

}


export const PROVIDER_DELETE = async (pathUrl) => {
    const headers = {
        'Content-Type':'application/json',
    }
    const response = await axios.delete(`${BASE_URL}/api/${pathUrl}`,{headers})
        .then((res) => {
            // console.log("STATUS RESPONSE : " + res.status);
            // console.log("DATA RESPONSE : " + res.data);
            switch (res.status) {
                case 200:
                    return res.data
                case 201:
                    return res.data
                case 403:
                    throw "forbidden"
                default:
                    console.log("error")
                    break;
            }
        }).catch(err => {
            throw err
        })

    return response
}


export const PROVIDER_PUT = async (pathUrl,data) => {
    const headers = {
        'Content-Type':'application/json',
        
    }
    const response = await axios.put(`${BASE_URL}/api/${pathUrl}`,data,{headers})
        .then((res) => {
            // console.log("STATUS RESPONSE : " + res.status);
            // console.log("DATA RESPONSE : " + res.data);
            switch (res.status) {
                case 200:
                    return res.data
                case 201:
                    return res.data
                case 403:
                    throw "forbidden"
                default:
                    console.log("error")
                    break;
            }
        }).catch(err => {
            throw err
        })

    return response
}

