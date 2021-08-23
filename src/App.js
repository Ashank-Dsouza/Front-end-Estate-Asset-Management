import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/singUpPage";
import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
import PasswordResetPage from "./pages/PasswordReset";
import MapUser from "./pages/MapUser";
import Auth from './auth/Auth';

class App extends React.Component {
  constructor () {
    super()
    this.login = this.login.bind(this)
  }

  
    login() {
        console.log("re routing to home page");
        ChangeRoute("/home-page");
    };

    render(){
  return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/login" component={LoginPage} props={{ login: this.login }}  >
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
}

export default App;

function ChangeRoute(path) {
  let history = useHistory();
  history.push(path);
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

