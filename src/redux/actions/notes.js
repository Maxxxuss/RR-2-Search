
import { notes as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'




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

export const startAddFile = (notesData = {} ) => {
  return (dispatch) => {
      const note ={
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          fileUrl: notesData,
      }     
    
      return firebase.database().ref('notes').push(note).then((ref)=>{
      dispatch(addNote({
          id: ref.key,
          ...note 
          }))        
      })
  }
}


export const startAddNotes = (notesData = {}, fileUrl = {}) => {
    return (dispatch) => {
        const note ={
            content:  notesData,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            fileUrl: fileUrl,
        }             
       return firebase.database().ref('notes').push(note).then((ref)=>{
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
      return firebase.database().ref('notes').once('value').then((snapshot) => {
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
  

  export const setUserPosts = setUserPosts => {
    return{
    type: actionTypes.setUserPosts,
    setUserPosts
    }
  }