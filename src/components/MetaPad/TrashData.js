import React from "react"
import { notes, trash } from "../../redux/actions/action-types";
import MetaPad from './MetaPad'



class TrashDate extends React.Component  {

    state = {
        activeTrashNote:"", 
        trash:this.props.trash,
    }


  setActiveTrashNote = (trashData) => {
    this.setState({ activeTrashNote: trashData });
    console.log(this.state.activeTrashNote)
  };

  displayLinkedNotes = (trash) => 
  trash.map(trashData => (
    <li
      key={trashData.trashId} 
      onClick={() => this.setActiveTrashNote(trashData)}
        > 
         # {trashData.trashContent}
      </li>
    ))

    deleteNotePermanetly = () => {

    }

    restoreNote = (activeTrashNote)=> { 
      this.props.startRestoreNote(activeTrashNote)
      console.log("active Trash note Id:" +this.state.activeTrashNote.trashId)

    }

    render () {
        const {trash} = this.props
        const {activeTrashNote} = this.state

        return ( 

          <div>

            <div>
             {/* <button
             > 
               Delete All 
              </button>    */}

              <button 
              onClick ={() => this.restoreNote(activeTrashNote)}
              >
                Restore Note
              </button>
            </div>
            <div>
                <h1>
                Trash Data
                </h1>
                {this.displayLinkedNotes(trash)}
            </div>  



          </div>
            )
    }
}

export default TrashDate
