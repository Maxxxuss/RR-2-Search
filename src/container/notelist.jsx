import {connect}  from 'react-redux';
import NoteList from '../components/dynNotelist'
import {getAllNotes} from '../redux/selectors/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

export default connect(
    mapStateToProps,
    null,
)(NoteList)
