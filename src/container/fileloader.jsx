import {connect}  from 'react-redux';
import UploadDoc from '../components/Header/UploadDoc'
import { startAddFile, updateNoteContent } from '../redux/actions/notes';
import {getNotesList} from '../redux/selectors/notes'

const mapStateToProps = (state) => ({
    id: getNotesList(state),
    content: getNotesList(state),
});


const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
    // onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    null,
    mapDispatchToProps,
)(UploadDoc);
