import {connect}  from 'react-redux';
import AddNote from '../components/Header/AddNote'
import { startAddNotes,updateNoteContent } from '../redux/actions/notes';
import {getAllNotes, getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getAllNotes(state),
    content: getAllNotes(state),
});


const mapDispatchToProps = (dispatch) => ({
    // onAddNote: (intialContent) => dispatch(addNote(intialContent)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNote);
