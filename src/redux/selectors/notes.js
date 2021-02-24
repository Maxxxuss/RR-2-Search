import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getAllNotes = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        categorie: note.categorie ? note.categorie : "",
        content: note.content ? note.content : "",
        description: note.description ? note.description : "", 
        timestamp: note.timestamp ? note.timestamp : "", 
        fileUrl: note.fileUrl ? note.fileUrl : "",
        image: note.image ? note.image : "",

    }))
);


