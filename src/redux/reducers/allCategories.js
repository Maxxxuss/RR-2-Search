import {
    categorie as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';




const initalState = []

  const actionsMap = {
    [actionTypes.getAllCategories]: (state, action) => (state, action.allCategories),
    [actionTypes.allCategories]: (state, action) => (state, action.allCategories),
  //  [actionTypes.editNotesContent] : (state, action) => (state, action.allCategories)
    [actionTypes.editNotesContent]: (state, action) => (state.filter(({id} ) => id !== action.id)),

  //   [actionTypes.editNotesContent] : (state, action) => (
  //     state.map((note) => {
  //         if (note.id === action.id) {
  //           return {
  //             ...note,
  //             ...action.updates
  //           };
  //         } else {
  //           return note;
  //         };
  //     })),

  }
  
  export default createReducer(initalState, actionsMap);
