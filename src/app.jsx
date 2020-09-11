import React from 'react';
import Notepad from './container/notepad'
import NoteList from './container/notelist'
import PdfView from './components/pdfView/pdfView'




const App = () => (
    <div>
        <Notepad/>
        <NoteList/> 
        <PdfView/>

    </div>
)

export default App;
