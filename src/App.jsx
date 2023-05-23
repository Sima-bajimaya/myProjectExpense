import {OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import config from './config';
import Routes from './components/Routes';
import NavBar from './Navbar';


const oktaAuth=new OktaAuth(config.oidc);



function App() {
  const navigate= useNavigate();
  const restoreOriginalUri=(_oktaAuth, originalUri)=>{
    navigate(toRelativeUrl(originalUri||'/',window.location.origin));
  }


  return (
  <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
<header className='App-header'>
  <NavBar/>
</header>
<main>
  <Routes/>
</main>
</Security>
    
  );
}

export default App;
