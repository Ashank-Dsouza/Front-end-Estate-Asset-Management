import { isValidElement } from 'react';
import useToken from './useToken';

const Auth = {
    //const { token, setToken } = useToken();

    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        console.log("returning: ", this.authenticate);
        if(sessionStorage.getItem('userToken') === null){
            return false;
        }
        else{
            return true;
        }
    },


};
export default Auth;