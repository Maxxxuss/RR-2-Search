import React from 'react';
import {history} from '../../router/AppRouter'



class Header extends React.Component {

    state ={


    }

    sideTrash=(path) => {
        history.push(path)
  
        window.location.reload(false);
  
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

                        onClick = {() => this.sideTrash('/trash')}
                        >
                            Show-Trash
                        </button>
                </h3>


            </div>
        )
            

            
                        
            
        
    }
}

export default Header