import React, { Component } from "react";



export default class EditNote extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
         idActiveNote: "",
       
    
        };
      }

    handelRemoveNote = ( e ) => {
            e.preventDefault();

        const idActiveNote = this.props.activeNote.id
        // const trash = this.setState
  
        this.props.startRemoveNote(idActiveNote)
  
        console.log({idActiveNote})

        this.setState(() => ({idActiveNote}))

    }
  


    render() {

          return (
            <div> 

                <button
                onClick={this.handelRemoveNote}
                >
                    Löschen
                </button>

            </div>
        )
    }
}
