import axios from "axios";

import {MockSetup, EnvironmentVariables as env} from "./../variables";
import {GetBaseURL} from   "./../utility/UrlBuilder";


function setBaseURL() {
    if(MockSetup.IsMockOn){
        axios.defaults.baseURL =  GetBaseURL(env.protocol, "localhost", env.port);
    }
    else{
        axios.defaults.baseURL = GetBaseURL(env.protocol, env.host, env.port);
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

export async function PostWithAuth(url, body) {
    setBaseURL();
    const token = sessionStorage.getItem('userToken');
    const config = getConfig(token);

    return axios.post(url, body, config)
            .then(function (response) {
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
