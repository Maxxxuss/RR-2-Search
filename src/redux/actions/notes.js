
import { notes as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'
import {v4 as uuidv4 } from 'uuid'

const noteFactory = (note) => {
    // database.ref('notes').push(note).then((ref)=>{
    return {
        ...note
        };
    // })
}

export const addNote = (note) => ({
    type: actionTypes.addNote,
       ...noteFactory(note),
  });

export const startAddFile = (fileUrl = {} ) => {
  return (dispatch) => {
      const note ={
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          image: fileUrl,
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
        const note = {
          buzwords: notesData.buzwords, 
          description: notesData.description, 
          content: notesData.titel,
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

  export const setCurrentNote = activeNote => ({
      type: actionTypes.setCurrentNote,
      currentNote: activeNote     
    })

    export const removeNotes = ({ id } = {}) => ({ 
      type: actionTypes.startRemoveNotes,
      id
    });
    
    export const startRemoveNotes = ({ id } = {}) => {
      // return (dispatch) => {
        return (dispatch,) => {
    
          return firebase.database().ref(`notes/${id}`).remove().then(() => {
    
        // return database.ref(`notes/${id}`).remove().then(() => {
          dispatch(({ 
            type:actionTypes.startRemoveNotes,
            id
           }));
          console.log(id)
        });
      };
    };

    export const editNotes = (id, updates) => ({
      type: actionTypes.editNotes,
      id,
      updates
    });
    
    export const startEditNotes = (id, updates) => {
        return (dispatch) => {
    
        return firebase.database().ref(`notes/${id}`).update(updates).then(() => {
              dispatch(editNotes(id, updates));
        });
      };
    };

    export const addTrash  = (note) => ({
      type: actionTypes.addTrash,
         ...noteFactory(note),
    });
  
    export const startAddTrash = (trashData = {}) => {
      return (dispatch) => {
          const trash = {
        trashData, 
        trashTimeStamp: firebase.database.ServerValue.TIMESTAMP,                                 
          }      
         return firebase.database().ref('trash').push(trash).then(()=>{
          dispatch(({
            type: actionTypes.addTrash,
            trash
              }))        
          })               
      }
  }