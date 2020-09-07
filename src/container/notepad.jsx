import {connect}  from 'react-redux';
import Notepad from '../components/notepad/notepad'
import { startAddNotes,updateNoteContent } from '../redux/actions/notes';
import {getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getNotesList(state),
    content: getNotesList(state),
});


const mapDispatchToProps = (dispatch) => ({
    // onAddNote: (intialContent) => dispatch(addNote(intialContent)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notepad);
