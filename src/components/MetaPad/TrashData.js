import React from "react"
import { notes } from "../../redux/actions/action-types";
import MetaPad from './MetaPad'



class TrashDate extends React.Component  {

    state = {
        searchTerm: "",
        activeNote:"", 
        file:"",
        content:"",
        selectedNote:"",
        categorie:"",
        notes: this.props.notes, 
        searchResults: [],
    }


  setActiveNote = (note) => {
    this.setState({ activeNote: note });
    this.setState({ file:  note.image })
    this.setState({content: note.content})
    this.setState({selectedNote: note})
    this.setState({categorie: note.categorie})

    console.log(this.state.activeNote)
    console.log(this.state.categorie)
  };

  displayLinkedNotes = (notes) => 
  notes.map(note => (
    <li
      key={note.id} 
      onClick={() => this.setActiveNote(note)}
        > 
         # {note.trashData.content}
      </li>
    ))


    render () {
        const {notes} = this.props

        return ( 
            <div>
                <h1>
                Trash Data
                </h1>
                {this.displayLinkedNotes(notes)}

            </div>   
            )
    }
}

export default TrashDate
