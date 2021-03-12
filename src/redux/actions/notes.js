
import { notes as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'

const noteFactory = (note) => {
    return {
        ...note
        };
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
      const categorie = getState().categorie
      

      const note = {
        buzwords: notesData.buzwords, 
        description: notesData.description, 
        content: notesData.titel,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        fileUrl: fileUrl,
        categorie: categorie.catName,
        }             
       return firebase.database().ref(`users/${uid}/notes`).child(categorie.id).push(note).then((ref)=>{
        
          dispatch(addNote({
            id: ref.key,           
            ...note 
            }))        
        })
    }
}

  
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

  export const startAddNoteToTrash = ( trashData={}, {id}={}) => {

    return (dispatch, getState) => {
      const categorie = getState().categorie.id

        const notes = {
      trashData, 
      trashTimeStamp: firebase.database.ServerValue.TIMESTAMP,  
      categorie: categorie                               
        }      
        const uid = getState().auth

       return firebase.database().ref(`users/${uid}/trash/`).push(notes).then(()=>{
            return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {

                dispatch(({ 
                  type:actionTypes.startAddNoteToTrash, 
                  id
                  
                 }));
                console.log(id)
              });
        })               
    }
}
 
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
        // return firebase.database().ref(`categorie`).once('value').then((snapshot) => {

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

// CATEGORIE NOTES 


// import { categorie as actionTypes } from './action-types.js';
// import firebase from '../../firebase/firebase'


export const getAllCategories = (allCategories) => {
    return {
      type: actionTypes.getAllCategories, 
      allCategories
    }
  }
  
  
  export const setAllCatetegories  = () => {
    return (dispatch, getState) => {
          return firebase.database().ref(`categories`).once('value').then((snapshot) => {
  
        const allCategories = [];
  
        snapshot.forEach((childSnapshot) => {
            allCategories.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(getAllCategories(allCategories));
      });
    };    
  };

  export const editNotesContent = (id, updates) => ({
    type: actionTypes.editNotesContent,
    id,
    updates
  });
  
    
  export const startEditNotesContent = (activeNote, updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth
      const categorie = getState().categorie.id
      const id = activeNote.id
      const pusNote = {
        categorie: activeNote.categorie, 
        buzwords: activeNote.buzwords, 
        content: activeNote.content ,
        description: activeNote.description, 
        timestamp: activeNote.timestamp ,
        fileUrl: activeNote.fileUrl ,
        image: activeNote.image,
      }

      //remove Changed Categorie-Note

      //set Categorie Note 
      return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).update({categorie: updates.catName}).then(()=>{

        // Push updatet Note to new Kat
        return firebase.database().ref(`users/${uid}/notes/${updates.id}`).push(pusNote).update({categorie: updates.catName}).then(()=>{

        // delete updatete Note
        return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {


            dispatch(editNotesContent(
              activeNote.id, 
              updates),

             );
            console.log("action ID" +id)

          });
    })    
  })    
  };
};