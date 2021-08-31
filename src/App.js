import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/singUpPage";
import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
import PasswordResetPage from "./pages/PasswordReset";
import MapUser from "./pages/MapUser";
import UserProfile from './pages/UserProfile';
import PrivateRoute from "./components/PrivateRoute";
import AddUser from "./pages/AddUser";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <Router>
        <div>

          <Switch>
            <Route exact path="/add-user" component={AddUser} >
            </Route>
            <Route exact path="/login" component={LoginPage} >
            </Route>
            <Route exact path="/sign-up" component={SignUpPage}>
            </Route>
            <Route exact path="/forgot-password" component={PasswordRecoverPage}>
            </Route>
            <Route exact path="/password-reset" component={PasswordResetPage}>
            </Route>
            <PrivateRoute exact path="/home-page" > <MapUser /></PrivateRoute>
            <PrivateRoute exact path="/profile" > <UserProfile />
            </PrivateRoute>
            <PrivateRoute exact path="/add-user" > <AddUser />
            </PrivateRoute>
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



