import React, {Component} from 'react';
import LinkedNotes from '../note.js'
import PropTypes from 'prop-types'
import { Comment, Image,Menu, Item } from "semantic-ui-react";
import { notes } from '../../redux/actions/action-types.js';
// import setCurrentNote from '../redux/actions/notes'
import firebase from '../../firebase/firebase'
import NotesSearch from '../Header/NotesSearch'
import PdfView from '../../components/Docs/pdfView/pdfView'
<<<<<<< HEAD
=======
import AddDataForm from './AddDataForm.js';
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer

class MetaPad extends Component {

  state = {
    activeNote: "", 
    notesRef: firebase.database().ref("notes"),
    actNote: [],
    searchTerm: "",
    searchLoading: false,
    searchResults: [],
<<<<<<< HEAD
    file: ""
=======
    file: "",
    titel:"" ,
    
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
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
<<<<<<< HEAD
=======
    this.setState({titel: note.content})
    console.log(this.state.activeNote)
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
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

<<<<<<< HEAD
     displayMetadata = (activeNote) => {
  
      return(
          <ul>
            <li>{activeNote.content} </li>
             <li> {activeNote.id} </li> 
             <li>
                 <Image src= {activeNote.image} />  
=======
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
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
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
     
<<<<<<< HEAD
    
    render (){
      const {notes} = this.props
=======
    handelRemove = () => {
      this.props.startRemoveNotes ({id: this.state.activeNote.id})
    }
    
    render (){
      const {notes, onAddNote} = this.props
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
      const {activeNote,searchLoading, searchTerm,searchResults, file} = this.state
      return (
        <div>

        <NotesSearch 
          handleSearchChange={this.handleSearchChange}
          searchLoading={searchLoading}
<<<<<<< HEAD
        />  
=======
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


>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
           <div>
             {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)}
             
            </div>

            <div>
              <p>Hier stehen die Metadaten</p>
<<<<<<< HEAD
              {this.displayMetadata(activeNote)}
=======
              {this.displayMetadata()}
>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
            </div>

            
              <PdfView
              file = {file}
              />


        </div>
      )
    }
}

export default MetaPad