import { combineReducers } from 'redux';
import notes from './notes.js';
import authReducer from './auth'
import categorie from './categorie'


export default combineReducers({
   notes,
   auth: authReducer,
   categorie,
   
});
