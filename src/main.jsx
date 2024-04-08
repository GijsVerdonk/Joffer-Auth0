import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={import.meta.env.VITE_REACT_APP_DOMAIN}
  clientId={import.meta.env.VITE_REACT_APP_CLIENTID}
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://dev-3lebxulwjkpksehn.us.auth0.com/api/v2/",
    scope: "openid profile email read:current_user update:current_user_metadata testCustomClaim"
  }}>
  <App />
</Auth0Provider>
);