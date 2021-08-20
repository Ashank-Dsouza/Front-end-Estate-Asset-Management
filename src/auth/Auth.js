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
        return this.authenticate;
    }
};
export default Auth;