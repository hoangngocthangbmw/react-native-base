import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(reactotron) {
    let store
    if(__DEV__){
         store = reactotron.createStore(rootReducer, applyMiddleware(thunk));
    } else {
        store = createStore(rootReducer, applyMiddleware(thunk));
    }
   
    return store;
}
