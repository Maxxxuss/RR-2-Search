import React, {Component} from 'react';
import LinkedNotes from '../note.js'
import PropTypes from 'prop-types'
import { Comment, Image,Menu, Item } from "semantic-ui-react";
import { notes } from '../../redux/actions/action-types.js';
// import setCurrentNote from '../redux/actions/notes'
import firebase from '../../firebase/firebase'
import NotesSearch from '../Header/NotesSearch'
import PdfView from '../../components/Docs/pdfView/pdfView'

class MetaPad extends Component {

  state = {
    activeNote: "", 
    notesRef: firebase.database().ref("notes"),
    actNote: [],
    searchTerm: "",
    searchLoading: false,
    searchResults: [],
    file: ""
  }

  static propTypes = {
    // activeNote: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        // content: PropTypes.string.isRequired,
    })),
  }

  changeNote = actNote => {
    this.setActiveNote(actNote);
    // this.props.onSetCurrentNote(this.state.activeNote);
  };

  setActiveNote = note => {
    this.setState({ activeNote: note });
    this.setState({ file:  note.image })
  };

 
    displayLinkedNotes = notes => 
    notes.map(note => (
      <li
        key={note.id} 
        onClick={() => this.changeNote(note)}
          > 
           # {note.content}
        </li>
      ))

     displayMetadata = (activeNote) => {
  
      return(
          <ul>
            <li>{activeNote.content} </li>
             <li> {activeNote.id} </li> 
             <li>
                 <Image src= {activeNote.image} />  
              </li>         
          </ul>
      )
    }  

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
      const {notes} = this.props
      const {activeNote,searchLoading, searchTerm,searchResults, file} = this.state
      return (
        <div>

        <NotesSearch 
          handleSearchChange={this.handleSearchChange}
          searchLoading={searchLoading}
        />  
           <div>
             {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)}
             
            </div>

            <div>
              <p>Hier stehen die Metadaten</p>
              {this.displayMetadata(activeNote)}
            </div>

            
              <PdfView
              file = {file}
              />


        </div>
      )
    }
}

export default MetaPad