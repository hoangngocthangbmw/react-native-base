import { UPDATE_FIRSTNAME, UPDATE_PASSWORD, UPDATE_EMAIL, UPDATE_LASTNAME, CLEAR_USER_REGISTER, UPDATE_USER_REGISTER } from "../actions";

const initialState = {
    user: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    }

}

export const updateUserRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRSTNAME:
            return {
                ...state,
                user: {
                    ...this.state.user,
                    firstName: action.payload
                }
            }

        case UPDATE_LASTNAME:
            return {
                ...state,
                user: {
                    ...this.state.user,
                    lastName: action.payload
                }

            }

        case UPDATE_EMAIL:
            return {
                ...state,
                user: {
                    ...this.state.user,
                    email: action.payload
                }

            }

        case UPDATE_PASSWORD:
            return {
                ...state,
                user: {
                    ...this.state.user,
                    password: action.payload
                }

            }

        case UPDATE_USER_REGISTER:
            return {
                ...state,
                user: action.payload
            }

        case CLEAR_USER_REGISTER:
            return initialState

        default:
            return state;
    }
}