import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.setNotes]: (state, action) => (state, action.notes),

    [actionTypes.addNote]: (state, { type, ...newNote }) => state
        .concat([newNote]),
    [actionTypes.editNotes] : (state, action) => (
    state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          };
        } else {
          return note;
        };
    })),
    // [actionTypes.startAddTrash]: (state, action) => (state.filter(({ id }) => id !== action.id)),
    [actionTypes.setNotesOnCategorie]: (state, action) => (state, action.notes),
    [actionTypes.startAddNoteToTrash]: (state, action) => (state.filter(({id} ) => id !== action.id)),

}

export default createReducer(initalState, actionsMap);

// weiiter 4:44
