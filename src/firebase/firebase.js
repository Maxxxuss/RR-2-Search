import * as firebase from 'firebase'
import 'firebase/storage';
import "firebase/database";



var firebaseConfig = {
    apiKey: "AIzaSyAqBYn9PCUL93kR9X6mOa3BKdH_b0uaLsQ",
    authDomain: "reactsearch-d67f0.firebaseapp.com",
    databaseURL: "https://reactsearch-d67f0.firebaseio.com",
    projectId: "reactsearch-d67f0",
    storageBucket: "reactsearch-d67f0.appspot.com",
    messagingSenderId: "985864023887",
    appId: "1:985864023887:web:cfd73e72a45d6daee9df3a",
    measurementId: "G-78M1QZMWR4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//    const database = firebase.database() 
//   export const storage = firebase.storage()
//   export const storageRef = storage.ref()

export default firebase

// database.ref('notes').on('value', (snapshot) => {  
//      const notes = []

//     snapshot.forEach((childSnapshot)=> {
//         notes.push({
//             id: childSnapshot.key, 
//             ...childSnapshot.val()
//         })
//     })
//     console.log(notes)
// })


// WEITER 3.37.51

 
// SCHREIBEN von Daten in die DB 
    // database.ref().set({
    //     name: 'Peter Hacke',
    //     alter: 16, 
    //     location: {
    //         city: 'Oslo', 
    //         capital: 'Berlin'
    //     }
    // }).then(()=> {
    // console.log('Firebase Daten wurden geschrieben')
    // }).catch((e)=> {
    //     console.log('Firebase-Eingabe: failed', e)
    // })

// // Anzeigen der Daten in der Datanbank
//     database.ref()
//         .once('value')
//         .then((snapshot)=> {
//             const val = snapshot.val()
//             console.log(val)
//         })
//         .catch((e)=> {
//             console.log('Fehler beim Lesen der Daten.', e)
//         })
// // Anzeigenj der DB-Eiunträge bei Änderungen
//         const onValueChange  = database.ref().on('value',(snapshot) => {
//             console.log(snapshot.val())
//         }, (e) => {
//             console.log('Fehler bei der Datananzeige',e )
//         })


