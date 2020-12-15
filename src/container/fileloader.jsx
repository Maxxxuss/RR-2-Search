import {connect}  from 'react-redux';
import UploadDoc from '../components/Header/UploadDoc'
import { startAddFile } from '../redux/actions/notes';


const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
});

export default connect(
    null,
    mapDispatchToProps,
)(UploadDoc);
