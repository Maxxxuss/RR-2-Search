import {connect}  from 'react-redux';
import Notepad from '../components/notepad/notepad'
import { addNote, updateNoteContent } from '../redux/actions/notes';
import {getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getNotesList(state),
    content: getNotesList(state),
});


const mapDispatchToProps = (dispatch) => ({
    onAddNote: (initalContent) => dispatch(addNote(initalContent)),
    onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notepad);
