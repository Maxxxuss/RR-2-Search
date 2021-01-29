import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import {getAllNotes} from '../redux/selectors/notes'
import { startEditNotes, startAddNotes,startAddNoteToTrash } from '../redux/actions/notes'
import {startAddTrash,} from '../redux/actions/trash'
import { getAllTrash } from '../redux/selectors/trash';


const mapStateToProps = state =>( {
    notes: getAllNotes(state),
    // trash: getAllTrash(state)
})

const mapDispatchToProps = (dispatch) => ({
    startEditNotes: (id, updates) => dispatch(startEditNotes(id, updates)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    startAddNoteToTrash: (id, trash) => dispatch(startAddNoteToTrash(id, trash)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MetaPad)
