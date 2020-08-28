import {v4 as uuidv4 } from 'uuid';
import { notes as actionTypes } from './action-types.js';

const noteFactory = (initialContent = '') => {
    return {
        id: uuidv4(),
        content: initialContent,
    };
};

export const addNote = (initialContent = '') => ({
    type: actionTypes.addNote,
       ...noteFactory(initialContent),
  });

export const updateNoteContent = (id, content) => ({
    type: actionTypes.updateNoteContent,
    id,
    content,
});
