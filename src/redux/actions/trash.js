import { trash as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'
import {notesFactory, } from './notes'

    export const startRemoveNotes = ({ id } = {}) => {
        return (dispatch,getState) => {
          const uid = getState().auth
          const categorie = getState().categorie.id

          return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {
    
          dispatch(({ 
            type:actionTypes.startRemoveNotes,
            id
           }));
          console.log(id)
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
        const uid = getState().auth

      return firebase.database().ref(`users/${uid}/notes/${categorie}`).once('value').then((snapshot) => {
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