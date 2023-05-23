import { useOktaAuth } from '@okta/okta-react'
import React, { useEffect, useState } from 'react'

const Home = () => {
   const{authState,oktaAuth}=useOktaAuth();
   const[userInfo, setUserInfo]=useState(null);
   useEffect(()=>{
    if (!authState || !authState.isAuthenticated) {
        setUserInfo(null);
      } else {
        oktaAuth.getUser().then((info) => {
          setUserInfo(info);
        });
      }

   },[authState, oktaAuth]);

   const login= async ()=>{
    await oktaAuth.signInWithRedirect();
  console.log("login");
  }
    
  

   
 

   if(!authState){
    return(
        <div>Loading.........</div>
    );
   }

  return (

    <div>
      {/* {authState.isAuthenticated && <div>djdjsds</div>} */}

               { authState.isAuthenticated && !userInfo
        && <div>Loading user information...</div>}

        {authState.isAuthenticated && userInfo
        && (
            <div><p>Welcome, {userInfo.name}</p></div>
        )}
     
        {!authState.isAuthenticated&&(<>
            <h1>Please Login</h1>
            {/* <h1>{authState}</h1>
            <h1>{authState.isAuthenticated}</h1> */}
             <button id="login" onClick={login} >Login</button>
        </>
            

        )
        
        }
        

        
        
     
    </div>
  )
}

export default Home
