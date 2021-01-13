// export default (state = {}, action) => {
//   switch (action.type) {
//     case 'startSetLogin':
//       return {
//         uid: action.uid
//       };
//     case 'LOGOUT':
//       return {};
//     default:
//       return state;
//   }
// };

import {
  notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
  [actionTypes.login]:(state, action) => (state, action.uid), 
  [actionTypes.startSetLogin]:(state, action) => (state, action.uid), 

  

}

export default createReducer(initalState, actionsMap);
