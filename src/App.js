import React from "react";
import { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink , Switch} from 'react-router-dom';


import NameForm from "./pages/singUpPage";
import LoginPage from "./pages/LoginPage";
// import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
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
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={NameForm}>
            </Route>
            <Route path="/sign-in" component={LoginPage}>
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
