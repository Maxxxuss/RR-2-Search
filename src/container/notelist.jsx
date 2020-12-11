import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import {getAllNotes} from '../redux/selectors/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

<<<<<<< HEAD
=======
const mapDispatchToProps = (dispatch) => ({
    // onSetCurrentNote: (activeNote) => dispatch(setCurrentNote(activeNote)), // setNotes - prüfen 
    startRemoveNotes: (id) => dispatch(startRemoveNotes(id)), // setNotes - prüfen 
    startEditNotes: (id, updates) => dispatch(startEditNotes(id, updates)),
    onAddNote: (note) => dispatch(startAddNotes(note)),

});

>>>>>>> parent of 65eecbf... Component Notelist splittet, next Step: work on reducer
export default connect(
    mapStateToProps,
    null,
)(MetaPad)
