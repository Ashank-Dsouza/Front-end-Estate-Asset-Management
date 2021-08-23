import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/singUpPage";
import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
import PasswordResetPage from "./pages/PasswordReset";
import MapUser from "./pages/MapUser";
import Auth from './auth/Auth';

export default function AuthExample() {
    // const { token, setToken } = useToken();

  return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/login" component={LoginPage}  >
            </Route>
            <Route path="/sign-up" component={SignUpPage}>
            </Route>
            <Route path="/forgot-password" component={PasswordRecoverPage}>
            </Route>
            <Route path="/password-reset" component={PasswordResetPage}>
            </Route>
            <PrivateRoute path="/home-page" > <MapUser/></PrivateRoute>

          </Switch>
        </div>
      </Router>
  );
}



// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = Auth;
  return (
    <Route
      {...rest}
      render={({ location }) => 
        auth.getAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      
      }
    />
  );
}

