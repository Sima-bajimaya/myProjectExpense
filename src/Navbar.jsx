import { useOktaAuth } from '@okta/okta-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const{authState, oktaAuth}= useOktaAuth();

    const login=async()=>{await oktaAuth.signInWithRedirect();
    console.log("login")}
        
    const logout=async()=>await oktaAuth.signOut();

    
    if(!authState){
        return null;
    }
  return (
    <div>
      <Link to="/">Okta Project</Link>
      {authState.isAuthenticated&&(
        <Link to="/profile">Profile</Link>
      )}
       {authState.isAuthenticated&&(
        <Link to="/expense">AddExpenses</Link>
      )}
       {authState.isAuthenticated&&(
        <button onClick={logout}>LogOut</button>
      )}
       {/* {!authState&&!authState.isAuthenticated&&(
        <button onClick={login}>LogIn</button>
      )} */}
      {!authState||!authState.isAuthenticated&&(
        <button onClick={login}>LogIn</button>
      )}
    </div>
  )
}

export default Navbar
