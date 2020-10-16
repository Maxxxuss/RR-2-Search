import {connect}  from 'react-redux';
import DynNoteList from '../components/dynNotelist'
import { setCurrentNote } from '../redux/actions/notes';
import {getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getNotesList(state),
    content: getNotesList(state),
});


const mapDispatchToProps = (dispatch) => ({
    onSetCurrentNote: (activeNote) => dispatch(setCurrentNote(activeNote)), // setNotes - prüfen 
    // onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DynNoteList);
