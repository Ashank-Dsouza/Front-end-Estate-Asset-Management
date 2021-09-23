import axios from "axios";

import {MockSetup, EnvironmentVariables as env} from "./../variables";
import {GetBaseURL} from   "../utility/ApiHelperFunctions";


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
            throw error;
        })
}

export async function Put(url, body) {
    setBaseURL();
    console.log("put send with body: ", body);
    return axios.put(url, body)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            throw error;
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
                throw error;
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
            throw error;
        })
}

export async function DeleteWithAuth(url) {
    setBaseURL();
    const token = sessionStorage.getItem('userToken');

    const config = getConfig(token);

    return axios.delete(url, config)
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            console.log(error);
            throw error;
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
                throw error;
            })
}
