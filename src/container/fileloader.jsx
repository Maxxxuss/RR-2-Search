import {connect}  from 'react-redux';
import UploadDoc from '../components/Header/UploadDoc'
import { startAddFile, updateNoteContent } from '../redux/actions/notes';
import {getAllNotes, getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getAllNotes(state),
    content: getAllNotes(state),
});


const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
    // onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    null,
    mapDispatchToProps,
)(UploadDoc);
