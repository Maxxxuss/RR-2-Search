import {connect}  from 'react-redux';
import TrashDate from '../components/MetaPad/TrashData'
import {getAllTrash} from '../redux/selectors/trash'
import {startShowTrashNotes} from '../redux/actions/trash'

const mapStateToProps = state =>( {
    trash: getAllTrash(state),
    // categorie: getAllCategories (state) 
})

const mapDispatchToProps = (dispatch) => ({
    startShowTrashNotes: (trash) => dispatch(startShowTrashNotes(trash))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TrashDate)
