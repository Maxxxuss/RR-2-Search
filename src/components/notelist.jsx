import React, {Component} from 'react';
import Note from './note.js'
import PropTypes from 'prop-types'

class NoteList extends Component {

  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })),
  }

    render (){
      const {notes} = this.props
      return (
        <div>
          <ul> 
            {notes.map(note =>
            <Note
              key={note.id} 
              {...note} 
            />
          )} 
         </ul>
        </div>


      )
    }



}


// const NoteList = ({notes})=> (
//   <ul> 
//       {notes.map(note =>
//       <Note
//         key={note.id} 
//         {...notes} 
//       />
//       )}
//   </ul>
// )


// NoteList.propTypes = {
// notes: PropTypes.arrayOf(PropTypes.shape({
//     content: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired).isRequired,
// }

export default NoteList