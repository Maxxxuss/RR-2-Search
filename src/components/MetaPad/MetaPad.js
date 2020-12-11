import React, {Component} from 'react';
import LinkedNotes from '../note.js'
import PropTypes from 'prop-types'
import { Comment, Image,Menu, Item } from "semantic-ui-react";
import { notes } from '../../redux/actions/action-types.js';
// import setCurrentNote from '../redux/actions/notes'
import firebase from '../../firebase/firebase'
import NotesSearch from '../Header/NotesSearch'
import PdfView from '../../components/Docs/pdfView/pdfView'
import AddDataForm from './AddDataForm.js';

class MetaPad extends Component {

  state = {
    activeNote: "", 
    notesRef: firebase.database().ref("notes"),
    searchTerm: "",
    searchLoading: false,
    searchResults: [],
    file: "",
    titel:"" ,
    
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
    this.setState({titel: note.content})
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

      onTitelChange = (e) => {
        const titel = e.target.value
        this.setState (()=> ({titel}))
      }
    


      onNoteEdit = (e) => {
        e.preventDefault()
        const content = this.state.titel
        this.props.startEditNotes (this.state.activeNote.id,{ content})
      }


     displayMetadata = () => {
  
      return(
          <ul>

          <input          
             type="text"
             placeholder="Metadata-Content"
             autoFocus
             className="text-input"
             value={this.state.titel}
             onChange={ this.onTitelChange}
          />         
          
             {/* <li>{activeNote.content} </li> */}
             <li> {this.state.activeNote.id} </li> 
             <li>
                 <Image src= {this.state.activeNote.image} />  
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
     
    handelRemove = () => {
      this.props.startRemoveNotes ({id: this.state.activeNote.id})
    }
    
    render (){
      const {notes, onAddNote} = this.props
      const {activeNote,searchLoading, searchTerm,searchResults, file} = this.state
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
          <button
          onClick = {this.handelRemove}>
            Remove-Note
          </button>

          <button
          onClick = { this.onNoteEdit}
          >
            Änderung Übernehmen 
          </button>




          </div> 


           <div>
             {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)}
             
            </div>

            <div>
              <p>Hier stehen die Metadaten</p>
              {this.displayMetadata()}
            </div>

            
              <PdfView
              file = {file}
              />


        </div>
      )
    }
}

export default MetaPad