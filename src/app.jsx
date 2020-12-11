import React from 'react';
import NoteList from './container/notelist'
import PdfView from './components/Docs/pdfView/pdfView'
import UploadDoc from './container/fileloader'


const App = () => (
    <div>
        <UploadDoc />

        <NoteList/> 
        {/* <PdfView/> */}
    </div>
)

export default App;
