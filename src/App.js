import React from "react";
import { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink , Switch} from 'react-router-dom';

import { Redirect } from "react-router-dom";
import SignUpPage from "./pages/singUpPage";
import LoginPage from "./pages/LoginPage";
import PasswordRecoverPage from "./pages/PasswordRecoveryPage";
import PasswordResetPage from "./pages/PasswordReset";

import ProtectedRouter from "./pages/Router";
// import AccountSettingPage from "./pages/AccountSetting";
// import UserProfile from "./pages/UserProfile";
// import UserList from "./pages/UserList";
// import ViewUser from "./pages/ViewUser";
// import AddUser from "./pages/AddUser";
// import DeleteUser from "./pages/DeleteUser";
// import EmailTemplate from "./pages/EmailTemplate";
import MapUser from "./pages/MapUser";
import useToken from './auth/useToken'; 


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <LoginPage setToken={setToken} />
  }
  
  return (
    <>
    <Router basename="/react-auth-ui/">
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">

            <Route exact path="/" component={LoginPage} setToken={setToken}>
            </Route>
            <Route path="/sign-up" component={SignUpPage}>
            </Route>
            <Route path="/forgot-password" component={PasswordRecoverPage}>
            </Route>
            <Route path="/password-reset" component={PasswordResetPage}>
            </Route>
            <Route path="/home-page" component={ProtectedRouter}>
            </Route>
        </div>

      </div>

    </Router>
                </>

  );
}



// function App() {
//   return (
//     <>
//       <Router basename="/react-auth-ui/">

//       {/* <SingUp /> */}
//       {<LoginPage/>}
//       {/* <PasswordRecoverPage/> */}
//       {/* <AccountSettingPage/> */}
//       {/* <UserProfile/> */}
//       {/* <UserList/> */}
//       {/* <ViewUser/> */}
//       {/* <AddUser/> */}
//       {/* <DeleteUser/> */}
//       {/* <EmailTemplate link="#"/> */}
//       {/* <MapUser/> */}
//                    <Route exact path="/" component={LoginPage}>
//              </Route>
//              <Route path="/sign-up" component={SignUpPage}>
//             </Route>
//              <Route path="/forgot-password" component={PasswordRecoverPage}>
//              </Route>
//              <Route path="/password-reset" component={PasswordResetPage}>
//              </Route>
//       </Router>
//     </>
//   );
//}

export default App;
