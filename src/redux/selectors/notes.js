import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getAllNotes = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        content: note.content ? note.content : "",
        fileUrl: note.fileUrl ? note.fileUrl : "",
        image: note.image ? note.image : "",
        categorie: note.categorie ? note.categorie : "",
        trashData: note.trashData ? note.trashData : "",

    }))
);

// export const getTrash = state => state.notes;

// export const getAllTrash = createSelector(
//     getNotes,
//     trashDatas => notes.map(note => ({
//         id: note.id,
//         content: note.trashData.content ? note.trashData.content : "",
//         fileUrl: note.trashData.fileUrl ? note.trashData.fileUrl : "",
//         image: note.trashData.image ? note.trashData.image : "",
//         categorie: note.trashData.categorie ? note.trashData.categorie : "",
//         trashData: note.trashData.trashData ? note.trashData.trashData : "",

//     }))
// );

