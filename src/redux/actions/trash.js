import { trash as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'




  export const startAddTrash = (trashData = {}, {id}={}) => {
    return (dispatch, getState) => {
        const trash = {
      trashData, 
      trashTimeStamp: firebase.database.ServerValue.TIMESTAMP,                                 
        }      
        const uid = getState().auth
        const categorie = getState().categorie.id

       return firebase.database().ref(`users/${uid}/trash/`).push(trash).then(()=>{
        dispatch(({
          type: actionTypes.startAddTrash,
          trash
            }))
            return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {

                dispatch(({ 
                  type:actionTypes.startRemoveNotes,
                  id
                 }));
                console.log(id)
              });
        })               
    }
}

export const setTrashNotes = (trashs) => ({
    type: actionTypes.setTrashNotes,
    trashs
  });
  
  export const startShowTrashNotes = () => {
    return (dispatch, getState) => {
      const uid = getState().auth

        // return firebase.database().ref(`users/${uid}/trashs`).once('value').then((snapshot) => {
        return firebase.database().ref(`users/${uid}/trash/`).once('value').then((snapshot) => {
        
        const trashs = [];
  
        snapshot.forEach((childSnapshot) => {
          trashs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setTrashNotes(trashs));
      });
    };
}



    // export const setTrash = (trashNotes) => ({
    //     type: actionTypes.setNotes,
    //     trashNotes
    //   });
      
    //   export const startSetTrash = () => {
    //     return (dispatch) => {
    //       return firebase.database().ref('trash').once('value').then((snapshot) => {
    //         const trashNotes = [];
      
    //         snapshot.forEach((childSnapshot) => {
    //           trashNotes.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //           });
    //         });
      
    //         dispatch(setNotes(trashNotes));
    //       });
    //     };
    //   };