import React, {Component} from 'react';
import LinkedNotes from './note.js'
import PropTypes from 'prop-types'
import { Comment, Image,Menu, Item } from "semantic-ui-react";
import { notes } from '../redux/actions/action-types.js';
// import setCurrentNote from '../redux/actions/notes'
import firebase from '../firebase/firebase'



class DynNoteList extends Component {

  state = {
    activeNote: "", 
    notesRef: firebase.database().ref("notes"),
    actNote: [],
  }

  static propTypes = {
    activeNote: PropTypes.string,
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
  };

 
    displayLinkedNotes = notes => 
    notes.map (note => (
      <li
        key={note.id} 
        onClick={() => this.changeNote(note)}
        // active={note.id === this.state.activeNote}
          > 
           # {note.content}
        </li>
      ))

 

  // addListeners () {
  //   const activeNote = this.state
  //   this.addMessageListener(activeNote);
  // };

  //   addMessageListener = activeNote => {
  //     let loadedNotes = [];
  //     this.state.notesRef.child(activeNote).on("child_added", snap => {
  //       loadedNotes.push(snap.val());
  //       console.log(loadedNotes)
  //       this.setState({
  //         actNote: loadedNotes,
  //         notesLoading: false,
  //       });
        
  //       // this.countUniqueUsers(loadedNotes);
  //     });
  //   };
    

    displayMetadata = (activeNote) => {
  
      return(
          <ul>
            <li>{activeNote.content} </li>
             <li> {activeNote.id} </li>
            
          </ul>

      )
    }  

      
    
    render (){
      const {notes} = this.props
      const {activeNote} = this.state
      return (
        <div>
           <div>
              {this.displayLinkedNotes(notes)}
            </div>

            <div>
              <p>Hier stehen die Metadaten</p>
              {this.displayMetadata(notes, activeNote)}
            </div>
      
        </div>
      )
    }
}

export default DynNoteList