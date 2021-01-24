import {connect}  from 'react-redux';
import Header from '../components/Header/Header'
import { startAddFile } from '../redux/actions/notes';


const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Header);
