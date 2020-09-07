import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.js';
import middlewares from './middleware/index.js';
import {localStorageKey} from './middleware/constants'


const composerFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLocalStorageState = () => {
    const cache = localStorage.getItem(localStorageKey);
    return cache ? JSON.parse(cache) : {};
}

export default createStore(
    rootReducer,
    getLocalStorageState(),
    composerFunction(applyMiddleware(thunk), middlewares)
)

 

