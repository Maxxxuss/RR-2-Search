import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.setNotes]: (state, action) => (state, action.notes),
    [actionTypes.addNote]: (state, { type, ...newNote }) => state
        .concat([newNote]),
    [actionTypes.editNotes]: (state, action, id) => state.map(note => ({
            note,
            id : id,
            content: action.content,    })),
    // [actionTypes.editNotes]: (state, action) => (state, action.notes),
    
    
};

export default createReducer(initalState, actionsMap);
