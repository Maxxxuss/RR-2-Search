import { connect } from 'react-redux';
import { firstStartLogin } from '../redux/actions/auth';
import LoginPage from '../components/LoginPage'


const mapDispatchToProps = (dispatch) => ({
  firstStartLogin: (uid) => dispatch(firstStartLogin(uid))
});

export default connect(
  null, 
  mapDispatchToProps,
  )(LoginPage);
