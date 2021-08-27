import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9191';

function getConfig(token) {
    return {
        headers: { Authorization: `Bearer ${token}` }
    }
};

function getAuth() {
    const token = sessionStorage.getItem('userToken');
    console.log("the token is: ", token);
    if (!token)
        throw Error("User has logged out!");

    const config = getConfig(token);

    return config;
}

export async function Post(url, body) {

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
