import { LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILED } from "../actions";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
            }

        case LOGGING_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
            }

        case LOGGING_IN_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
            }

        default:
            return state;
    }
}