import React from 'react';


class LoginPage extends React.Component {
  
  render () {
    return(
      <div>
      <button onClick={()=> this.props.firstStartLogin("/")}> Login</button>
       {/* <button  onClick={firstStartLogin}>Login with Google</button> */}
    </div>
   

    )
  }
}




 export default LoginPage