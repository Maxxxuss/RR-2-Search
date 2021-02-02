import {
    trash as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.startAddTrash]: (state, action) => (state, action.trash),
    [actionTypes.setTrashNotes]: (state, action) => (state, action.trash),
    [actionTypes.startRestoreNote]: (state, action) => (state.filter(({id} ) => id !== action.id)),

}

export default createReducer(initalState, actionsMap);

