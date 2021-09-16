import { TransferSessionDataAcrossTabs } from "../utility/SessionStorageManager";



const Auth = {

    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        TransferSessionDataAcrossTabs();

        if(sessionStorage.getItem('userToken') === null){
            console.log("returning false");
            return false;
        }
        else{
            console.log("returning true");
            return true;
        }
    },

};
export default Auth;