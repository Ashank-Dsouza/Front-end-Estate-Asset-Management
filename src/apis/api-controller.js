import axios from "axios";

import {MockSetup} from "../variables"


function setBaseURL() {
    if(MockSetup.IsMockOn){
        axios.defaults.baseURL = 'http://localhost:9191';
    }
    else{
        axios.defaults.baseURL = 'http://65.2.129.86:9191';
    }
}


function getConfig(token) {
    return {
        headers: { Authorization: `Bearer ${token}` }
    }
};

export async function Post(url, body) {
    setBaseURL();
    return axios.post(url, body)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
}

export async function GetWithAuth(url) {
    setBaseURL();
    const token = sessionStorage.getItem('userToken');

    const config = getConfig(token);

    return axios.get(url, config)
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
}

export async function PutWithAuth(url, body) {
    setBaseURL();
    const token = sessionStorage.getItem('userToken');
    const config = getConfig(token);

    return axios.put(url, body,config)
            .then(function (response) {
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
}
