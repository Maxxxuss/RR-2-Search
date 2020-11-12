import React from 'react';
import AddNote from './container/notepad'
import NoteList from './container/notelist'
import PdfView from './components/Docs/pdfView/pdfView'
import UploadDoc from './container/fileloader'


const App = () => (
    <div>
        <UploadDoc />

        <AddNote/>
        <NoteList/> 
        {/* <PdfView/> */}
    </div>
)

export default App;
