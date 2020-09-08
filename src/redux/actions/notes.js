
import { notes as actionTypes } from './action-types.js';
import database from '../../firebase/firebase'


// const noteFactory = (initialContent = '') => {
//     return {
//         id: uuidv4(),
//         content: initialContent,
//     };
// }

const noteFactory = (note) => {
    // database.ref('notes').push(note).then((ref)=>{
    return {
        // id: ref.key,
        ...note
        };
    // })
}

export const addNote = (note) => ({
    type: actionTypes.addNote,
       ...noteFactory(note),
  });


// export const addNote = (note) => ({
//     type: actionTypes.addNote, 
//     note
//   });

export const startAddNotes = (notesData = {}) => {
    return (dispatch) => {
        const {
            content = notesData
        } = notesData
        const note = {content}
        
       return database.ref('notes').push(note).then((ref)=>{
        dispatch(addNote({
            id: ref.key,
            ...note 
            }))

          
        })
    }
}

export const updateNoteContent = (id, content) => ({
    type: actionTypes.updateNoteContent,
    id,
    content,
});


export const setNotes = (notes) => ({
    type: actionTypes.setNotes,
    notes
  });
  
  export const startSetNotes = () => {
    return (dispatch) => {
      return database.ref('notes').once('value').then((snapshot) => {
        const notes = [];
  
        snapshot.forEach((childSnapshot) => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setNotes(notes));
      });
    };
  };
  