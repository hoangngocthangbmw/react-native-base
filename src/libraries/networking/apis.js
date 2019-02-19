import NavigationService from 'routers/NavigationService';
import { Status } from './status';
import axios from 'axios';
import constants from 'libraries/utils/constants';
import R from 'res/R';


var instance = axios.create({
    baseURL: constants.BASE_URL,
    timeout: constants.SERVER_TIMEOUT,
})

function fetch(url, data, isAuth) {
    let headers = null
    if (isAuth) {
        headers = {
            Authorization: `Bearer ${database.tokenCache}`
        }
    }

    return instance.get(url, {
        params: {
            username,
            password,

            ...data
        },
        headers: headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

function post(url, data, isAuth) {
    let headers = null
    if (isAuth) {
        headers = {
            Authorization: `Bearer ${database.tokenCache}`
        }
    }

    return instance.post(url, ...data, {
        headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

export default apis = {
    PATH: {
        LOGIN: '/login',
    },
    fetch,
    post,

}