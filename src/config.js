// const CLIENT_ID = process.env.CLIENT_ID || '{clientId}';
const CLIENT_ID = process.env.CLIENT_ID
// const ISSUER = process.env.ISSUER || 'https://{yourOktaDomain}/oauth2/default';
// const ISSUER = https:+//{yourOktaDomain}/oauth2/default
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

// eslint-disable-next-line
export default {
  oidc: {
    clientId: "0oa9aiwk1xuf5QYzp5d7",
    issuer: 'https://dev-05002749.okta.com/oauth2/default',
    // clientId:CLIENT_ID,
    // issuer: `https://${process.env.ISSUER}/oauth2/default`,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email', 'reactapp'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};