import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';



const initalState = []

  const actionsMap = {
      [actionTypes.setCategorie]:(state, action) => (state, action.categorie ),
      [actionTypes.setNotesOnCategorie]: (state, action) => (state, action.notes),


      

  }
  
  export default createReducer(initalState, actionsMap);
