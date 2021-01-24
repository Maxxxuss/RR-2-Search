import React from 'react';
import NoteList from './container/notelist'
import UploadDoc from './container/fileloader'
import AppRouter from './router/AppRouter';
import Categorie from './components/sidePanel/Categorie';
import Header from './container/header'



const App = () => (
    <div>
        <Header/>
        <Categorie/>
        <AppRouter />
         <UploadDoc />

        {/* <NoteList/>  */}
    </div>
)

export default App;
