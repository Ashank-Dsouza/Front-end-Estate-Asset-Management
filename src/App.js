import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/security/LoginPage";
import SignUpPage from "./pages/security/SingUpPage";
import ForgotPasswordPage from "./pages/security/ForgotPasswordPage";
import PasswordResetPage from "./pages/security/PasswordReset";
import MapUser from "./pages/MapUser";
import UserProfile from './pages/UserProfile';
import PrivateRoute from "./components/route-components/PrivateRoute";
import ContextRoute from "./components/route-components/ContextRoute";
import AddUser from "./pages/AddUser";
import PageNotFound from "./pages/PageNotFound";
import NotEnoughPermissions from "./pages/NotEnoughPermissions";
import AccountSettingPage from "./pages/AccountSetting";
import CodeVerificationPage from "./pages/security/CodeVerification/CodeVerificationPage";

import { RoutePath } from "./constants/routes";
import Dashboard from "./pages/Dashboard";
import ConfirmEmail from "./pages/ConfirmEmail";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <Router>
        <div>

          <Switch>
            <Route exact path={RoutePath.LoginPage} component={LoginPage} >
            </Route>
            <Route exact path={RoutePath.SignUpPage} component={SignUpPage}>
            </Route>
            <ContextRoute exact path={RoutePath.ForgotPasswordPage} component={ForgotPasswordPage}>
            </ContextRoute>
            <ContextRoute exact path={RoutePath.CodeVerificationPage} component={CodeVerificationPage}>
            </ContextRoute>
            <Route exact path={RoutePath.PasswordResetPage} component={PasswordResetPage}>
            </Route>
            <Route exact path={RoutePath.NotAllowed} component={NotEnoughPermissions}>
            </Route>

            <Route exact path={RoutePath.CodeVerificationPage} component={CodeVerificationPage}>
            </Route>
            <Route exact path={RoutePath.ConfirmEmail} > <ConfirmEmail /></Route>



            <PrivateRoute exact path={RoutePath.MapUser} > <MapUser /></PrivateRoute>
            <PrivateRoute exact path={RoutePath.UserProfile} > <UserProfile />
            </PrivateRoute>
            <PrivateRoute exact path={RoutePath.AddUserPage}> <AddUser />
            </PrivateRoute>
            <PrivateRoute exact path={RoutePath.SettingsPage} > <AccountSettingPage />
            </PrivateRoute>
            <PrivateRoute exact path={RoutePath.Dashboard} > <Dashboard /></PrivateRoute>



            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



