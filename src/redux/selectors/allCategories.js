import { createSelector } from 'reselect';

export const getCategories = state => state.allCategories;

export const getAllCategories = createSelector(
    getCategories,
    allCategories => allCategories.map(categorie => ({
        catName: categorie.catName ? categorie.catName : "",
        id: categorie.id ? categorie.id : ""
    }))
);

