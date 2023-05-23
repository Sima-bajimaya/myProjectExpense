import { useOktaAuth } from '@okta/okta-react'
import React ,{useEffect}from 'react'
import { Outlet } from 'react-router-dom';
import { toRelativeUrl } from '@okta/okta-auth-js';
import Loading from './Loading';

const SecureRoute = () => {
    const { oktaAuth, authState } = useOktaAuth();

    useEffect(() => {
      if (!authState) {
        return ;
      }
  
      if (!authState?.isAuthenticated) {
        const originalUri = toRelativeUrl(window.location.href, window.location.origin);
        oktaAuth.setOriginalUri(originalUri);
        oktaAuth.signInWithRedirect();
      }
    }, [oktaAuth, !!authState, authState?.isAuthenticated]);
  
    if (!authState || !authState?.isAuthenticated) {
      return (<Loading />);
    }
  
    return (<Outlet />);}

export default SecureRoute
