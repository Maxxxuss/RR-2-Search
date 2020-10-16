import React from 'react';
import Notepad from './container/notepad'
import NoteList from './container/notelist'
import PdfView from './components/pdfView/pdfView'
import MessageForm from './container/fileloader'


const App = () => (
    <div>
        <Notepad/>
        <NoteList/> 
        {/* <PdfView/> */}
        <MessageForm />
    </div>
)

export default App;
