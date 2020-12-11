import {connect}  from 'react-redux';
import MetaPad from '../components/MetaPad/MetaPad'
import {getAllNotes} from '../redux/selectors/notes'

const mapStateToProps = state =>( {
    notes: getAllNotes(state),
})

export default connect(
    mapStateToProps,
    null,
)(MetaPad)
