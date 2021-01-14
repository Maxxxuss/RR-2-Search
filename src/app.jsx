import React from 'react';
import NoteList from './container/notelist'
import UploadDoc from './container/fileloader'
import AppRouter from './router/AppRouter';
import Categorie from './components/sidePanel/Categorie';


const App = () => (
    <div>
        <Categorie/>
        <AppRouter />
         <UploadDoc />

        {/* <NoteList/>  */}
    </div>
)

export default App;
