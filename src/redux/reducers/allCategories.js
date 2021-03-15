import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';




const initalState = []

  const actionsMap = {
    [actionTypes.getAllCategories]: (state, action) => (state, action.allCategories),
    [actionTypes.allCategories]: (state, action) => (state, action.allCategories),

  }
  
  export default createReducer(initalState, actionsMap);
