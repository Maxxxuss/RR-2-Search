// import { localStorageKey } from '../../constants.js';
import { localStorageKey } from './constants';



const loggingMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = JSON.stringify(store.getState());
    localStorage.setItem(localStorageKey, state);
    return result;
};

export default loggingMiddleware;
