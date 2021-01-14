import { auth } from 'firebase';
import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getAllNotes = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        content: note.content ? note.content : "",
        fileUrl: note.fileUrl ? note.fileUrl : "",
        image: note.image ? note.image : "",
        categorie: note.categorie ? note.categorie : ""

    }))
);

