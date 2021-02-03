import { combineReducers } from 'redux';
import notes from './notes.js';
import authReducer from './auth'
import categorie from './categorie'
import trash from './trash'
import allCategories from './allCategories'


export default combineReducers({
   notes,
   auth: authReducer,
   categorie,
   trash, 
   allCategories
   

   
});
