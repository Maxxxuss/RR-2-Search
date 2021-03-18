import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import {getAllNotes} from '../redux/selectors/notes'
import { startEditNotes, startAddNotes,startAddNoteToTrash, startAddFile } from '../redux/actions/notes'


const mapStateToProps = state =>( {
    notes: getAllNotes(state),
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    startEditNotes: (id, updates) => dispatch(startEditNotes(id, updates)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    startAddNoteToTrash: (id, trash) => dispatch(startAddNoteToTrash(id, trash)),
    startAddFile: (fileUrl) => dispatch(startAddFile(fileUrl)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MetaPad)
