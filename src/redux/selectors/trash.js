import { createSelector } from 'reselect';


export const getTrash = state => state.trash;

export const getAllTrash = createSelector(
    getTrash,
    trash => trash.map(trash => ({
        trashId: trash.id,
        trashContent: trash.trashData.content ? trash.trashData.content : "",
        trashFileUrl: trash.trashData.fileUrl ? trash.trashData.fileUrl : "",
        trashImage: trash.trashData.image ? trash.trashData.image : "",
        trashCategorie: trash.trashData.categorie ? trash.trashData.categorie : "",

    }))
);

