import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.setNotes]: (state, action) => (state, action.notes),
    [actionTypes.addNote]: (state, { type, ...newNote }) => state
        .concat([newNote]),
    // [actionTypes.editNotes]: (state, action) => state.map(notes => 
    //     ({
    //         // ...notes,
    //         content: action.content,
    //     })
    // ),
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
    }))
}

export default createReducer(initalState, actionsMap);
