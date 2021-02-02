
// import { categorie as actionTypes } from './action-types.js';
// import firebase from '../../firebase/firebase'


// export const setCategorie = (categorie ) => {
//     return {
//       type: actionTypes.setCategorie, 
//       categorie
//     }
//   }
  
  
//   export const setNotesOnCategorie  = () => {
//     return (dispatch, getState) => {
//     //   const uid = getState().auth
//     //   const categorie = getState().categorie.id 
  
//         // return firebase.database().ref(`users/${uid}/notes/${categorie}`).once('value').then((snapshot) => {
//           return firebase.database().ref(`categorie`).once('value').then((snapshot) => {
  
//         const categorie = [];
  
//         snapshot.forEach((childSnapshot) => {
//           categorie.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//           });
//         });
  
//         dispatch(setCategorie(categorie));
//       });
//     };
//   };