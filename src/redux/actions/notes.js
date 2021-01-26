
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

export const startAddFile = (fileUrl = {}, ) => {
  
  return (dispatch,getState) => {
    const uid = getState().auth
    const categorie = getState().categorie.id

      const note ={
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          image: fileUrl,
      }     
    
      return firebase.database().ref(`users/${uid}/notes/${categorie}`).push(note).then((ref)=>{
      dispatch(addNote({
          id: ref.key,
          ...note 
          }))        
      })
  }
}

export const startAddNotes = (notesData = {}, fileUrl = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth
      const categorie = getState().categorie.id

      const note = {
        buzwords: notesData.buzwords, 
        description: notesData.description, 
        content: notesData.titel,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        fileUrl: fileUrl,
        categorie: notesData.categorie,
        }             
       return firebase.database().ref(`users/${uid}/notes`).child(categorie).push(note).then((ref)=>{
        
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
      const uid = getState().auth
      const categorie = getState().categorie.id

        // return firebase.database().ref(`users/${uid}/notes`).once('value').then((snapshot) => {
        return firebase.database().ref(`users/${uid}/notes/${categorie}`).once('value').then((snapshot) => {
        
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

  export const setNotesCategorie = (notes) => ({
    type: actionTypes.setNotesCategorie,
    notes
  });
  
  export const startSetNotesCategorie = () => {
    return (dispatch, getState) => {
      const uid = getState().auth

      // return firebase.database().ref('notes').once('value').then((snapshot) => {
        return firebase.database().ref(`users/${uid}/notes`).once('value').then((snapshot) => {

        
        const notes = [];
  
        snapshot.forEach((childSnapshot) => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setNotesCategorie(notes));
      });
    };
  };
  
    export const startRemoveNotes = ({id} = {}) => {
        return (dispatch,getState) => {
          const uid = getState().auth
          const categorie = getState().categorie.id
          // const id = getState().notes.id

          return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {
    
          dispatch(({ 
            type:actionTypes.startRemoveNotes,
            id
           }));
          console.log(id)
        });
      };
    };

    export const setTrashNotes = (notes) => ({
      type: actionTypes.setTrashNotes,
      notes
    });
    
    export const startShowTrashNotes = () => {
      return (dispatch, getState) => {
        const uid = getState().auth
  
          // return firebase.database().ref(`users/${uid}/notes`).once('value').then((snapshot) => {
          return firebase.database().ref(`users/${uid}/trash/`).once('value').then((snapshot) => {
          
          const notes = [];
    
          snapshot.forEach((childSnapshot) => {
            notes.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
    
          dispatch(setTrashNotes(notes));
        });
      };
    };
  


    export const editNotes = (id, updates) => ({
      type: actionTypes.editNotes,
      id,
      updates
    });
    
    export const startEditNotes = (id, updates) => {
        return (dispatch, getState) => {
          const uid = getState().auth
          const categorie = getState().categorie.id


    
        return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).update(updates).then(() => {
              dispatch(editNotes(id, updates));
        });
      };
    };

    export const addTrash  = (note) => ({
      type: actionTypes.addTrash,
         ...noteFactory(note),
    });
  
    export const startAddTrash = (trashData = {}, id) => {
      return (dispatch, getState) => {
          const trash = {
        trashData, 
        trashTimeStamp: firebase.database.ServerValue.TIMESTAMP,                                 
          }      
          const uid = getState().auth
         return firebase.database().ref(`users/${uid}/trash/`).push(trash).then(()=>{
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

  export const startSetLogin = (uid) => 

  ({  type: actionTypes.login,
    uid})

    // {
    // return (dispatch, getState) => {
    //   return firebase.database().ref('notes').once('value').then((snapshot) => {
        
    //     const loginData = {
    //       uid: uid
    //     };
  
    //     dispatch(login(loginData));
    //   });
    // };
  // };
  
  export const firstStartLogin = () => {
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

export const setCategorie = (categorie ) => {
  return {
    type: actionTypes.setCategorie, 
    categorie
  }
}


export const setNotesOnCategorie  = () => {
  return (dispatch, getState) => {
    const uid = getState().auth
    const categorie = getState().categorie.id 

      return firebase.database().ref(`users/${uid}/notes/${categorie}`).once('value').then((snapshot) => {
      const notes = [];

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setNotes(notes));
      // dispatch(setCategorie(categorie))
    });
  };
};