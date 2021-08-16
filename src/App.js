import React from "react";
import { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink , Switch} from 'react-router-dom';


import SignUpPage from "./pages/singUpPage";
import LoginPage from "./pages/LoginPage";
import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
import PasswordResetPage from "./pages/PasswordReset";

// import AccountSettingPage from "./pages/AccountSetting";
// import UserProfile from "./pages/UserProfile";
// import UserList from "./pages/UserList";
// import ViewUser from "./pages/ViewUser";
// import AddUser from "./pages/AddUser";
// import DeleteUser from "./pages/DeleteUser";
// import EmailTemplate from "./pages/EmailTemplate";
import MapUser from "./pages/MapUser";

function App() {
  return (
    <Router basename="/react-auth-ui/">
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
              <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={LoginPage}>
            </Route>
            <Route path="/sign-up" component={SignUpPage}>
            </Route>
            <Route path="/forgot-password" component={PasswordRecoverPage}>
            </Route>
            <Route path="/password-reset" component={PasswordResetPage}>
            </Route>
        </div>

      </div>
    </Router>
  );
}



// function App() {
//   return (
//     <>
//       {/* <SingUp /> */}
//       {/* <LoginPage/> */}
//       {/* <PasswordRecoverPage/> */}
//       {/* <AccountSettingPage/> */}
//       {/* <UserProfile/> */}
//       {/* <UserList/> */}
//       {/* <ViewUser/> */}
//       {/* <AddUser/> */}
//       {/* <DeleteUser/> */}
//       {/* <EmailTemplate link="#"/> */}
//       <MapUser/>
//     </>
//   );
// }

export default App;
