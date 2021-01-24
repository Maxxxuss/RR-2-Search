import {connect}  from 'react-redux';
import TrashDate from '../components/MetaPad/TrashData'
import {getAllNotes} from '../redux/selectors/notes'
import {getAllCategories} from '../redux/selectors/categorie'
import {startRemoveNotes, startEditNotes, startAddNotes, startAddTrash, startSetTrash, setNotesOnCategorie} from '../redux/actions/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
    // categorie: getAllCategories (state) 
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveNotes: (id) => dispatch(startRemoveNotes(id)),
    startEditNotes: (id, updates) => dispatch(startEditNotes(id, updates)),
    onAddNote: (note) => dispatch(startAddNotes(note)),
    startAddTrash: (id, trashData) => dispatch(startAddTrash(id, trashData)),
    startSetTrash: () => dispatch(startSetTrash()),
    setNotesOnCategorie: (notes) => dispatch(setNotesOnCategorie(notes)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TrashDate)
