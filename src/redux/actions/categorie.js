
import { categorie as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'


export const getAllCategories = (allCategories) => {
    return {
      type: actionTypes.getAllCategories, 
      allCategories
    }
  }
  
  
  export const setAllCatetegories  = () => {
    return (dispatch, getState) => {
    //   const uid = getState().auth
    //   const categorie = getState().categorie.id 
  
        // return firebase.database().ref(`users/${uid}/notes/${categorie}`).once('value').then((snapshot) => {
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
  
  // export const startEditNotesContent = (id, {updates}) => {
    
  //   console.log("Action. " + JSON.stringify(updates) )

  //     return (dispatch, getState) => {
  //       const uid = getState().auth
  //       const categorie = getState().categorie.id

  //       // const updateCatId = updates.uodates.name



        
  //     return firebase.database().ref(`users/${uid}/notes/${updates.id}/${id}`).update(updates).then(() => {
  //           dispatch(editNotesContent(id, updates));
  //     });


  //   };
  // };

    
  export const startEditNotesContent = (activeNote, {updates}) => {
    return (dispatch, getState) => {
      const uid = getState().auth
      const categorie = getState().categorie.id
      const id = activeNote.id
      const pusNote = {

        categorie: activeNote.categorie, 
        content: activeNote.content ,
        description: activeNote.description, 
        timestamp: activeNote.timestamp ,
        fileUrl: activeNote.fileUrl ,
        image: activeNote.image,

      }

      //remove Changed Categorie-Note

      //set Categorie Note 
      // return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).update({categorie: updates.catName}).then(()=>{

        //get updated Note

        // Push updatet Note to new Kat
        return firebase.database().ref(`users/${uid}/notes/${updates.id}`).push(pusNote).then(()=>{


        // delete updatete Note


      // return firebase.database().ref(`users/${uid}/notes/${updates.id}`).push(updates).then(()=>{
        return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {


            dispatch(editNotesContent(
              activeNote.id, 
              updates)
              
             );
            console.log("action ID" +id)
          });
    })    

  };
};