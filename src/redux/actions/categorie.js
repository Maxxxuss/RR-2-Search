
// import { notes as actionTypes } from './action-types.js';
// import firebase from '../../firebase/firebase'


// export const getAllCategories = (allCategories) => {
//     return {
//       type: actionTypes.getAllCategories, 
//       allCategories
//     }
//   }
  
  
//   export const setAllCatetegories  = () => {
//     return (dispatch, getState) => {
//           return firebase.database().ref(`categories`).once('value').then((snapshot) => {
  
//         const allCategories = [];
  
//         snapshot.forEach((childSnapshot) => {
//             allCategories.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//           });
//         });
  
//         dispatch(getAllCategories(allCategories));
//       });
//     };    
//   };

//   export const editNotesContent = (id, updates) => ({
//     type: actionTypes.editNotesContent,
//     id,
//     updates
//   });
  
    
//   export const startEditNotesContent = (activeNote, {updates}) => {
//     return (dispatch, getState) => {
//       const uid = getState().auth
//       const categorie = getState().categorie.id
//       const id = activeNote.id
//       const pusNote = {
//         categorie: activeNote.categorie, 
//         content: activeNote.content ,
//         description: activeNote.description, 
//         timestamp: activeNote.timestamp ,
//         fileUrl: activeNote.fileUrl ,
//         image: activeNote.image,
//       }

//       //remove Changed Categorie-Note

//       //set Categorie Note 
//       return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).update({categorie: updates.catName}).then(()=>{

//         // Push updatet Note to new Kat
//         return firebase.database().ref(`users/${uid}/notes/${updates.id}`).push(pusNote).update({categorie: updates.catName}).then(()=>{

//         // delete updatete Note
//         return firebase.database().ref(`users/${uid}/notes/${categorie}/${id}`).remove().then(() => {


//             dispatch(editNotesContent(
//               activeNote.id, 
//               updates.id)
              
//              );
//             console.log("action ID" +id)
//           });
//     })    
//   })    
//   };
// };