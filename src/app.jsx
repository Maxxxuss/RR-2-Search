import React from 'react';
import NoteList from './container/notelist'
import UploadDoc from './container/fileloader'
import AppRouter from './router/AppRouter';


const App = () => (
    <div>
        <AppRouter />
        {/* <UploadDoc />

        <NoteList/>  */}
    </div>
)

export default App;
