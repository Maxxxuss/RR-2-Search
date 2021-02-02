import {connect}  from 'react-redux';
import {getAllNotes} from '../redux/selectors/notes'
import DropDownCategorie from '../components/MetaPad/DropDownCategorie'
import { startAddFile,  } from '../redux/actions/notes';
import { startShowTrashNotes } from '../redux/actions/trash';
import { getAllCategories } from '../redux/selectors/categorie';



const mapStateToProps = state =>( {
    categorie: getAllCategories(state),
})

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
    startShowTrashNotes: (notes) => dispatch(startShowTrashNotes(notes))

});

export default connect(
    null,
    mapDispatchToProps,
)(DropDownCategorie);
