import React from 'react';
import {history} from '../../router/AppRouter'



class Header extends React.Component {

    state ={
        notes: this.props.notes
    }


    sideTrash=() => {
        history.push('/trash')
    this.props.startShowTrashNotes()    
    // window.location.reload(false);

  
      }

    render() {
        
        return(

            <div>
                <h3>
                    <button
                    onClick = {() => this.sideTrash('/Metapad')}
                    >
                        Metapad
                    </button>

                        <button

                        // onClick = {() => this.sideTrash('/trash')}
                        // onClick = {() => this.sideTrash('/trash')}
                        onClick = {this.sideTrash}

                        >
                            Show-Trash
                        </button>
                </h3>
            </div>
        )  
    }
}

export default Header