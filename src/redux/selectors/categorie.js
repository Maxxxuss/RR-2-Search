import { createSelector } from 'reselect';

export const getCategorie = state => state.categorie;

export const getAllCategories = createSelector(
    getCategorie,
    categorie => categorie.map(categorie => ({
        categorie: categorie.name ? categorie.name : ""
    }))

);

