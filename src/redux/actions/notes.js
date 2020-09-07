
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

// export const startAddNotes = (content) => ({
//     type: actionTypes.addNote, 
//       ...noteFactory,

//         database.ref('notes').push(content).then((ref)=>{
//         id: ref.key,
             
       
//         })
//     })




export const updateNoteContent = (id, content) => ({
    type: actionTypes.updateNoteContent,
    id,
    content,
});


