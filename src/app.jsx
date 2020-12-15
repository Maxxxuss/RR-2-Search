import React from 'react';
import NoteList from './container/notelist'
import UploadDoc from './container/fileloader'


const App = () => (
    <div>
        <UploadDoc />

        <NoteList/> 
    </div>
)

export default App;
