
import { notes as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'

const noteFactory = (note) => {
    return {
        ...note
        };
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


    return (dispatch, getState) => {
      const uid = getState().auth.uid

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

export const setNotes = (notes) => ({
    type: actionTypes.setNotes,
    notes
  });
  
  export const startSetNotes = () => {
    return (dispatch, getState) => {
      // const uid = getState().auth.uid

      return firebase.database().ref('notes').once('value').then((snapshot) => {
        // return firebase.database().ref(`users/${uid}/notes`).once('value').then((snapshot) => {

        
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
  
    export const startRemoveNotes = ({ id } = {}) => {
        return (dispatch,) => {
    
          return firebase.database().ref(`notes/${id}`).remove().then(() => {
    
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

  export const setTrash = (trashNotes) => ({
    type: actionTypes.setNotes,
    trashNotes
  });
  
  export const startSetTrash = () => {
    return (dispatch) => {
      return firebase.database().ref('trash').once('value').then((snapshot) => {
        const trashNotes = [];
  
        snapshot.forEach((childSnapshot) => {
          trashNotes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setNotes(trashNotes));
      });
    };
  };

  export const login = (uid) => ({
    type: actionTypes.login,
    uid
  });
  
  export const startLogin = () => {
    return () => {
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
  };
  
  export const logout = () => ({
    type: actionTypes.logout
  });
  
  export const startLogout = () => {
    return () => {
      return firebase.auth().signOut();
    };
  }; 