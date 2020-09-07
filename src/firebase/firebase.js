import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqBYn9PCUL93kR9X6mOa3BKdH_b0uaLsQ",
    authDomain: "reactsearch-d67f0.firebaseapp.com",
    databaseURL: "https://reactsearch-d67f0.firebaseio.com",
    projectId: "reactsearch-d67f0",
    storageBucket: "reactsearch-d67f0.appspot.com",
    messagingSenderId: "985864023887",
    appId: "1:985864023887:web:e0fd7f4ace6988f6e9df3a",
    measurementId: "G-NDV5KV69EE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database() 

export{firebase, database as default }

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


