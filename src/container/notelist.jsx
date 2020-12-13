import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import {getAllNotes} from '../redux/selectors/notes'
import {startRemoveNotes, startEditNotes, startAddNotes, startAddTrash} from '../redux/actions/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

const mapDispatchToProps = (dispatch) => ({
    // onSetCurrentNote: (activeNote) => dispatch(setCurrentNote(activeNote)), // setNotes - prüfen 
    startRemoveNotes: (id) => dispatch(startRemoveNotes(id)), // setNotes - prüfen 
    startEditNotes: (id, updates) => dispatch(startEditNotes(id, updates)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    startAddTrash: (id, trashData) => dispatch(startAddTrash(id, trashData))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MetaPad)
