import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9191';

function getConfig(token) {
    // const config = {
    //     headers: 
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "*/*"
    }
};
//return config;
//}

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

    return axios.get(url,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
}

export async function PutWithAuth(url, body) {
    console.log("inside PutWithAuth()");

    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJlbWFpbCI6ImFzaGFua2Rzb3V6YTA1NEBnbWFpbC5jb20iLCJleHAiOjE2Mjk5MDI4NDYsInJvbGUiOiIiLCJ1c2VyX2lkIjoiYjgxY2NiMjAtYjI1OS00YWUwLWFkMGUtNTNiZGJmMzViY2JjIiwidXNlcm5hbWUiOiJBLURzb3V6YSJ9.r5fd6or8qKbd9xwyR3llotuZhGJr2RgOSrgkQdJ1XLecs7Yb319z2TWujBV44acjhQNUw2Tb-uOMzI_ELg40Cw'
    };

    const config = getAuth();
    console.log("inside PutWithAuth()");
    const token = sessionStorage.getItem('userToken');

    return axios.put(url, body,
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
}
