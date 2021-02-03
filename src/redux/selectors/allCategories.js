import { createSelector } from 'reselect';

export const getCategories = state => state.allCategories;

export const getAllCategories = createSelector(
    getCategories,
    allCategories => allCategories.map(categorie => ({
        name: categorie.name ? categorie.name : "",
        id: categorie.id ? categorie.id : ""

    }))
);


