
import { notes as actionTypes } from './action-types.js';
import firebase from '../../firebase/firebase'

export const login = (uid) => ({
    type: actionTypes.login,
    uid
  });

  export const startSetLogin = (uid) => 

  ({  type: actionTypes.login,
    uid})


  
  export const firstStartLogin = () => {
    return () => {
      console.log("LoginButten Pressed")

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