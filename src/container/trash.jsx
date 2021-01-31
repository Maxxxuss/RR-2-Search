import {connect}  from 'react-redux';
import TrashDate from '../components/MetaPad/TrashData'
import {getAllTrash} from '../redux/selectors/trash'
import {startShowTrashNotes, startRestoreNote} from '../redux/actions/trash'

const mapStateToProps = state =>( {
    trash: getAllTrash(state),

})

const mapDispatchToProps = (dispatch) => ({
    startShowTrashNotes: (trash) => dispatch(startShowTrashNotes(trash)),
    startRestoreNote: (trashData) => dispatch(startRestoreNote(trashData))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TrashDate)
