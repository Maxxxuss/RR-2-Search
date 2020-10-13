import { createSelector } from 'reselect';

export const getNotes = state => state.notes;


export const getNotesList = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        content: note.content
    }))
);

export const getAllNotes = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        content: note.content,

    }))
);

// export const getAllNotes = createSelector(
//     getNotes,
//     notes =>  notes ? notes.content : ""

//    )




// export const getAllNotes = createSelector(
//     notes => 
// );
