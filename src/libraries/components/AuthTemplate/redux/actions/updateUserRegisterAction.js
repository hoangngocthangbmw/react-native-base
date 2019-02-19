import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_PASSWORD, UPDATE_EMAIL, CLEAR_USER_REGISTER, UPDATE_USER_REGISTER } from "./actionTypes";



export function onUpdateUserRegister(user){
    return dispatch => {
        dispatch({
            type: UPDATE_USER_REGISTER,
            payload: user
        })  
    }
}

export function onUpdateFirstName(firstName){
    return dispatch => {
        dispatch({
            type: UPDATE_FIRSTNAME,
            payload: firstName
        })  
    }
}

export function onClearUserRegister(){
    return dispatch => {
        dispatch({
            type: CLEAR_USER_REGISTER,
        })  
    }
}

export function onUpdateLastName(lastName){
    return dispatch => {
        dispatch({
            type: UPDATE_LASTNAME,
            payload: lastName
        })  
    }
}

export function onUpdateEmail(email){
    return dispatch => {
        dispatch({
            type: UPDATE_EMAIL,
            payload: email
        })  
    }
}

export function onUpdatePassword(password){
    return dispatch => {
        dispatch({
            type: UPDATE_PASSWORD,
            payload: password
        })  
    }
}




