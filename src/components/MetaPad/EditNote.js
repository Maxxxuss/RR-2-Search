import React, { Component } from "react";
import {Image} from "semantic-ui-react"


export default class EditNote extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            titel : ""

        }

      }


      handelRemove = () => {
        const  id = this.props.activeNote.id
        this.props.startRemoveNotes ({id })
        this.setState({id})
        console.log("stae ID" + this.props.id)
      }
      
      onTitelChange = (e) => {
        const titel = e.target.value
        
        this.setState (()=> ({titel}))
      }


      onNoteEdit = () => {

        const content = this.state.titel
        this.props.startEditNotes (this.props.activeNote.id, { titel: this.state.titel})
        const titel = ""
        this.setState({titel})
     

      }

     



     displayMetadata = () => {
  
      return(
          <ul>

          <input          
             type="text"
             placeholder="Metadata-Content"
             autoFocus
             className="text-input"
             value={this.state.titel ? this.state.titel : this.props.activeTitel}
             onChange={ this.onTitelChange}
          />         
          
             {/* <li>{activeNote.content} </li> */}
             <li> {this.props.activeNote.id} </li> 
             <li>
                 <Image src= {this.props.activeNote.image} />  
              </li>         
          </ul>
      )
    }  
  



    render() {
        const {activeNote} = this.props

          return (
            <div> 

            <div>
              <p>Hier stehen die Metadaten</p>
              {this.displayMetadata()}
            </div>

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
        )
    }
}
