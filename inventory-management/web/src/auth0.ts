import { Auth0Client } from "@auth0/auth0-spa-js";

export const auth0 = new Auth0Client({
  domain: "project-ify.eu.auth0.com",
  clientId: "vJ1abiSM6G5mN6Aga216vSvbpHJIxW2g",
  cacheLocation: "localstorage",
  authorizationParams: {
    redirect_uri: `${window.location.origin}/authenticate`,
  },
});
