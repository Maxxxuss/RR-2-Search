import {connect}  from 'react-redux';
import Header from '../components/Header/Header'
import {getAllNotes} from '../redux/selectors/notes'

import { startAddFile,  } from '../redux/actions/notes';
import { startShowTrashNotes } from '../redux/actions/trash';
import {startLogout} from '../redux/actions/auth'




const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
    startShowTrashNotes: (notes) => dispatch(startShowTrashNotes(notes)),
    startLogout:() => dispatch(startLogout())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
