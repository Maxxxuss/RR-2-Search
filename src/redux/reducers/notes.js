import {
    notes as actionTypes,
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const initalState = [];

const actionsMap = {
    [actionTypes.addNote]: (state, { type, ...newNote }) => state
        .concat([newNote]),

        // [actionTypes.addNote]: (state, action) => 
        //     [...state, 
        //     action.note
        //      ]
        // ,
 
     
    [actionTypes.updateNoteContent]: (state, action) => state.map(note => ({
            ...note,
            content: action.content,
        })
    ),
};

export default createReducer(initalState, actionsMap);
