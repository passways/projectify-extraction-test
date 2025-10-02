import { Auth0Client } from "@auth0/auth0-spa-js";

export const auth0 = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  cacheLocation: "localstorage",
  authorizationParams: {
    audience: "projectify-inma-api",
    redirect_uri: `${window.location.origin}/authenticate`,
  },
});
