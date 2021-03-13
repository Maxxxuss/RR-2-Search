import React from 'react';
import {history} from '../../router/AppRouter'



class Header extends React.Component {

    state ={
        notes: this.props.notes
    }


    sideTrash=(path) => {
        history.push(path)
    this.props.startShowTrashNotes()    
    window.location.reload(false)
      }

    render() {
        
        return(

            <div>
                       <button

                    onClick = {()=> this.props.startLogout('/')}
                    >
                        Logout
                    </button>


                <h3>
                    <button
                    onClick = {() => this.sideTrash('/Metapad')}
                    >
                        Metapad
                    </button>

                        <button

                        onClick = {()=> this.sideTrash('/trash')}
                        >
                            Show-Trash
                        </button>
                </h3>

            </div>
        )  
    }
}

export default Header