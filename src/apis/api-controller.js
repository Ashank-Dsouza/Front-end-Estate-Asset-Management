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

function getConfig() {
    const token = sessionStorage.getItem('userToken');
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

export async function PostWithAuth(url, body) {
    setBaseURL();
    const config = getConfig();

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
    const config = getConfig();

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
    const config = getConfig();

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
    const config = getConfig();

    return axios.put(url, body,config)
            .then(function (response) {
                return response;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            })
}
