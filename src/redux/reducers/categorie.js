import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';




const initalState = [ ]

  const actionsMap = {
      [actionTypes.setCategorie]:(state, action) => (state, action.categorie )
  }
  
//   const categorieReducer = (state = initialCategorieState, action) => {
//     switch (action.type) {
//       case actionTypes.SET_CURRENT_Categorie:
//         return {
//           ...state,
//           currentCategorie: action.payload.currentCategorie
//         }
//       default:
//         return state;
//     }
//   }

  export default createReducer(initalState, actionsMap);
