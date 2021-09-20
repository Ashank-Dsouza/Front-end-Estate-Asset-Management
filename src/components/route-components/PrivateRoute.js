import Auth from "../../auth/Auth";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import { RoutePath } from "../../constants/routes";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
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
                pathname: RoutePath.LoginPage,
                state: { from: location }
              }}
            />
          )
  
        }
      />
    );
  }

