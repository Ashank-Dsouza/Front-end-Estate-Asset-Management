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
import UserProfile from './pages/UserProfile';
import PrivateRoute from "./components/PrivateRoute";
import AddUser from "./pages/AddUser";
import CreateUserForm from "./components/CreateUser";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <Router>
        <div>

          <Switch>
          <Route exact path="/add-user-form" component={AddUser} >
            </Route>
            <Route exact path="/login" component={LoginPage} >
            </Route>
            <Route path="/sign-up" component={SignUpPage}>
            </Route>
            <Route path="/forgot-password" component={PasswordRecoverPage}>
            </Route>
            <Route path="/password-reset" component={PasswordResetPage}>
            </Route>
            <PrivateRoute path="/home-page" > <MapUser /></PrivateRoute>
            {/* <PrivateRoute path="/profile" > <UserProfile/></PrivateRoute> */}
            <PrivateRoute path="/profile" > <UserProfile />
            </PrivateRoute>
            <PrivateRoute path="/add-user" > <AddUser />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



