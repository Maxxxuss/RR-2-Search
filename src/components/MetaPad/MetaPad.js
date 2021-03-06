import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Image } from "semantic-ui-react";
import firebase from '../../firebase/firebase'
import NotesSearch from '../Header/NotesSearch'
import PdfView from '../../components/Docs/pdfView/pdfView'
import AddDataForm from './AddDataForm.js';
import DropDownCategorie from '../../container/dropDownCategorie'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';


class MetaPad extends Component {

  state = {
    selectedNote: "",
    activeNote: "", 
    notesRef: firebase.database().ref("notes"),
    searchTerm: "",
    searchLoading: false,
    searchResults: [],
    file: "",
    content: "" ,
    buzwords: "" ,
    description: "" ,

    notes: this.props.notes,
    trashData: "",
    categorie: this.props.categorie, 
    notesOnCategorie: "", 
  }

  static propTypes = {  
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
  }

  setActiveNote = (note) => {
    this.setState({ activeNote: note });
    this.setState({ file:  note.image })
    this.setState({content: note.content})
    this.setState({description: note.description})
    this.setState({buzwords: note.buzwords})


    this.setState({selectedNote: note})
    this.setState({categorie: note.categorie})

    console.log("MetaPad ActiveNote", this.state.activeNote)
  };

    displayLinkedNotes = (notes) => 
    notes.map(note => (
      <li
        key={note.id} 
        onClick={() => this.setActiveNote(note)}
          > 
           # {note.content}
        </li>
      ))

      oncontentChangeContent = (e) => {
        const content = e.target.value
        this.setState (()=> ({content}))
      }
      oncontentChangeDescription = (e) => {
        const description = e.target.value
        this.setState (()=> ({description}))
      }
      oncontentChangeBuzword = (e) => {
        const buzwords = e.target.value
        this.setState (()=> ({buzwords}))
      }

      onNoteEdit = (e) => {
        e.preventDefault()
        const content = this.state.content
        const description = this.state.description
        const buzwords = this.state.buzwords

        const updates = {content,description, buzwords}

        this.props.startEditNotes (this.state.activeNote.id, updates)
      }


     displayMetadata = () => {
  
      return(
          <ul>

          <input          
             type="text"
             placeholder="Metadata-Content"
             autoFocus
             className="text-input"
             value={this.state.content}
             onChange={ this.oncontentChangeContent}
          />    
           <input          
             type="text"
             placeholder="Metadata-Buzwords"
             autoFocus
             className="text-input"
             value={this.state.buzwords}
             onChange={ this.oncontentChangeBuzword}
          />    
           <input          
             type="text"
             placeholder="Metadata-Description"
             autoFocus
             className="text-input"
             value={this.state.description}
             onChange={ this.oncontentChangeDescription}
          />   

             <li> {this.state.activeNote.id} </li> 
             <DropDownCategorie
             actCategorie = {this.state.categorie}
             activeNote = {this.state.activeNote}
             />

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
        this.props.startAddNoteToTrash ( this.state.activeNote, {id: this.state.activeNote.id})
        // this.setState (this.props.notes)
    }


    
    
    render (){
      const {notes, onAddNote} = this.props
      const {searchLoading, searchTerm,searchResults, file} = this.state

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
          <div>
            </div>

          </div> 
           <div>
             {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)
             }

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