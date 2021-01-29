import React from 'react';
import { connect } from 'react-redux';
import { firstStartLogin } from '../redux/actions/auth';

export const LoginPage = ({ firstStartLogin }) => (
  <div>
    <button onClick={firstStartLogin}> Login</button>
  </div>
 



  // <div className="box-layout">
  //   <div className="box-layout__box">
  //     <h1 className="box-layout__title">Budget App</h1>
  //     <p>It's time to get your expenses under control.</p>
  //     <button className="button" onClick={firstStartLogin}>Login with Google</button>
  //   </div>
  // </div>
);

const mapDispatchToProps = (dispatch) => ({
  firstStartLogin: (uid) => dispatch(firstStartLogin(uid))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
