import {
    trash as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.startAddTrash]: (state, action) => (state, action.notes),
    // [actionTypes.startRemoveNotes]: (state, action) => (state.filter(({ id }) => id !== action.id)),

    // [actionTypes.setTrashNotes]: (state, action) => (state, action.trash),

    // [actionTypes.setNotesOnCategorie]: (state, action) => (state, action.notes),

}

export default createReducer(initalState, actionsMap);

