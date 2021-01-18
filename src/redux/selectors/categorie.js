import { createSelector } from 'reselect';

export const getCategorie = state => state.notes;

export const getAllCategories = createSelector(
    getCategorie,

);

