import { combineReducers } from 'redux';
import notes from './notes.js';
import auth from './auth'
import categorie from './categorie'
import trash from './trash'
import allCategories from './allCategories'


export default combineReducers({
   notes,
   auth,
   categorie,
   trash, 
   allCategories
   

   
});
