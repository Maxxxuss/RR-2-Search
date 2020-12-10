import React, {Component} from 'react';
import LinkedNotes from '../note.js'
import PropTypes from 'prop-types'
import { notes } from '../../redux/actions/action-types.js';
// import setCurrentNote from '../redux/actions/notes'
import firebase from '../../firebase/firebase'
import NotesSearch from '../Header/NotesSearch'
import PdfView from '../../components/Docs/pdfView/pdfView'
import AddDataForm from './AddDataForm.js';
import EditNote from './EditNote.js';

class MetaPad extends Component {

  state = {
    activeNote: {}, 
    notesRef: firebase.database().ref("notes"),
    searchTerm: "",
    searchLoading: false,
    searchResults: [],
    file: "",
    activeTitel:"" ,
    
  }

  static propTypes = {
    // activeNote: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        // content: PropTypes.string.isRequired,
    })),
  }


  setActiveNote = note => {
    this.setState({ activeNote: note });
    this.setState({ file:  note.image })
    this.setState({activeTitel: note.content})
    console.log(this.state.activeNote)
  };

 
    displayLinkedNotes = notes => 
    notes.map(note => (
      <li
        key={note.id} 
        onClick={() => this.setActiveNote(note)}
          > 
           # {note.content}
        </li>
      ))

      

    handleSearchChange = event => {
      this.setState(
        {
          searchTerm: event.target.value,
          searchLoading: true
        },
        () => this.handleSearchMessages()
      );
    };
  
    handleSearchMessages = () => {
      const notes = this.props.notes
      const regex = new RegExp(this.state.searchTerm, "gi");
      const searchResults = notes.reduce((acc, note) => {
       
        if (
          (note.content && note.content.match(regex)) 
        ) {
          acc.push(note);
        }
        return acc;
      }, []);
      this.setState({ searchResults });
      setTimeout(() => this.setState({ searchLoading: false }), 1000);
    };
     

    
    render (){
      const {notes, onAddNote, startRemoveNotes, startEditNotes} = this.props
      const {activeNote,searchLoading, searchTerm,searchResults, file,activeTitel} = this.state
      return (
        <div>

          <AddDataForm
          onAddNote = {onAddNote}
          />



        <NotesSearch 
          handleSearchChange={this.handleSearchChange}
          searchLoading={searchLoading}
        /> 
        <div>

          </div> 

          <EditNote
          activeNote = {activeNote}
          startRemoveNotes = {startRemoveNotes}
          startEditNotes = {startEditNotes}
          activeTitel = {activeTitel}
     
          />


           <div>
             {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)}
             
            </div>

           

            
              <PdfView
              file = {file}
              />



        </div>
      )
    }
}

export default MetaPad