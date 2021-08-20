import axios from "axios";

axios.defaults.baseURL = 'http://15.206.194.199:9191';

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

