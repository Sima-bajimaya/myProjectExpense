import { useOktaAuth } from '@okta/okta-react'
import React,{useState, useEffect} from 'react';
import { Table } from 'semantic-ui-react';



function Profile() {
  const{authState,oktaAuth} = useOktaAuth();
  const[userInfo, setUserInfo]= useState(null);
 
  useEffect(()=>{
if(!authState||!authState.isAuthenticated){
    setUserInfo(null);}
else{
    setUserInfo(authState.idToken.claims);
}



  },[authState,oktaAuth]);
  if(!userInfo){
    return(<div>Fetching ths User Information...........</div>)
  }
  return (
    <div>
      
      
      
      
      <h1>User Profile</h1>
      
      
      <Table>
      <thead>
      
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userInfo).map((claimEntry) => {
              const claimName = claimEntry[0];
              const claimValue = claimEntry[1];
              const claimId = `claim-${claimName}`;
              console.log("djdjfdjfjdfh",claimEntry);
              
              
              return (
                
                <tr key={claimName}>
                  <td>{claimName}</td>
                  <td id={claimId}>{claimValue.toString()}</td>
                 </tr>
                
              );
            })}
          </tbody>
      </Table>
         
<h1>T</h1>

          <section>
                <ul>
                    <li>Username: {userInfo?.preferred_username}</li>
                    <li>Email: {userInfo?.email}</li>
                    <li>Full Name: {userInfo?.name}</li>
                    <li>Group Name: {userInfo?.reactappclaim}</li>
                    { console.log("userInfo",userInfo)}
                  
                   
                  
                    <li>Email Verified: {userInfo?.email_verified ? "Yes" : "No"} </li>
                    
                </ul>
            </section>
        
      
    </div>
  )
}

export default Profile
