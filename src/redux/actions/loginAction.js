import {LOGGING_IN, LOGGING_IN_FAILED, LOGGING_IN_SUCCESS} from '../actions'


export function onLogin(){
    return dispatch => {
        dispatch(loggingIn())
        
    }
    
}

function loggingIn(){
    return {
        type: LOGGING_IN,
    }
}

function loginSuccess(){
    return {
        type: LOGGING_IN_SUCCESS,
    }
}

function loginFailed(error){
    return {
        type: LOGGING_IN_FAILED,
        payload: error
    }
}



