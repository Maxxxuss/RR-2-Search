import {connect}  from 'react-redux';
import {getAllNotes} from '../redux/selectors/notes'
import DropDownCategorie from '../components/MetaPad/DropDownCategorie'
import { startAddFile,   } from '../redux/actions/notes';
import { startShowTrashNotes } from '../redux/actions/trash';
import {  getAllCategories } from '../redux/selectors/allCategories';
import {startEditNotesContent} from '../redux/actions/notes'



const mapStateToProps = state =>( {
    allCategories: getAllCategories(state),
    notes: getAllNotes(state)
})

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (fileUrl) => dispatch(startAddFile(fileUrl)),
    startShowTrashNotes: (notes) => dispatch(startShowTrashNotes(notes)),
    startEditNotesContent: (id, updates) => dispatch(startEditNotesContent(id, updates)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DropDownCategorie);
