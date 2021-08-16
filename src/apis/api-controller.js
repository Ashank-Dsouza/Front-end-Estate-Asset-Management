import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9191';

export function Post(url, body) {

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

