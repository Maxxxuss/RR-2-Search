import {
    categorie as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';




const initalState = []

  const actionsMap = {
    [actionTypes.getAllCategories]: (state, action) => (state, action.allCategories),
    [actionTypes.allCategories]: (state, action) => (state, action.allCategories),
    // [actionTypes.editNotesContent] : (state, action) => (state, action.editNotesContent),

    [actionTypes.editNotesContent] : (state, action) => (
      state.map((updates) => {
          if (updates.id === action.id) {
            return {
              ...updates,
              ...action.updates
            };
          } else {
            return updates;
          };
      })),

  }
  
  export default createReducer(initalState, actionsMap);
