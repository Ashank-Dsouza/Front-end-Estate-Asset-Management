const Auth = {

    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {

        if(sessionStorage.getItem('userToken') === null){
            return false;
        }
        else{
            return true;
        }
    },

};
export default Auth;