import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { updateUserRegisterReducer } from 'libraries/components/AuthTemplate/redux/reducers'

const rootReducers = combineReducers({
    loginReducer,
    updateUserRegisterReducer
})

export default rootReducers;