
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