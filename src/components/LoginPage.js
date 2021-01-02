import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../redux/actions/notes';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}> Login</button>
  </div>



  // <div className="box-layout">
  //   <div className="box-layout__box">
  //     <h1 className="box-layout__title">Budget App</h1>
  //     <p>It's time to get your expenses under control.</p>
  //     <button className="button" onClick={startLogin}>Login with Google</button>
  //   </div>
  // </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
