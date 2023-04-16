import React from "react";
import ReactDOM from "react-dom";
import App from "./Homepage/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="gaurav3521.us.auth0.com"
    clientId="4sQUb2OgEh4UhGsZHkFktc54Gd0COkWI"
      redirectUri={window.location.origin}
  >
      <App />
  </Auth0Provider>
  ,
  document.getElementById("root")
);