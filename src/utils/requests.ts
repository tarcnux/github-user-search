import axios, {Method} from 'axios';


type RequestParams = {
    method?: Method;
    githubUser: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'https://api.github.com/users/';

const makeRequest = ({method = "GET", githubUser, data, params}:RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${githubUser}`,
        data,
        params
    });
}

export default makeRequest;