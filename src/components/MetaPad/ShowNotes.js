import { render } from '@testing-library/react'
import { defineLocale } from 'moment'
import React from 'react'
import react, { Component } from 'react'

export default class ShowNotes extends Component {

     
    displayLinkedNotes = (notes) => 
    
    notes.map(note => (
      <li
        key={note.id} 
        onClick={() => this.setActiveNote(note)}
          > 
           # {note.content}
        </li>
      ))

      oncontentChange = (e) => {
        const content = e.target.value
        this.setState (()=> ({content}))
      }

      render() {
          const {searchTerm, notes, searchResults} = this.props
        

          return(
              <div>
            {searchTerm
             ? this.displayLinkedNotes(searchResults)
             : this.displayLinkedNotes(notes)}

              </div>

          )
      }
    
}