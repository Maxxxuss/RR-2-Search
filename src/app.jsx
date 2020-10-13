import React from 'react';
import Notepad from './container/notepad'
import NoteList from './container/notelist'
import PdfView from './components/pdfView/pdfView'
// import Messages from './components/Messages/Messages'
import Messages from './container/fileloader'


const App = () => (
    <div>
        <Notepad/>
        <NoteList/> 
        {/* <PdfView/> */}
        <Messages />
    </div>
)

export default App;
