import { updateLocale } from 'moment';
import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import { startEditNotes, startRemoveNotes, startAddNotes } from '../redux/actions/notes';
import {getAllNotes} from '../redux/selectors/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

const mapDispatchToProps = (dispatch) => ({
    // onSetCurrentNote: (activeNote) => dispatch(setCurrentNote(activeNote)), // setNotes - prüfen 
    startRemoveNotes: (id) => dispatch(startRemoveNotes(id)), // setNotes - prüfen 
    startEditNotes: (id, note) => dispatch(startEditNotes(id, note)),
    onAddNote: (note) => dispatch(startAddNotes(note)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MetaPad)
