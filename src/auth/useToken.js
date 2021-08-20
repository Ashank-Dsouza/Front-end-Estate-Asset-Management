import { useState } from 'react';
import Auth from './Auth';


export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('loginData');
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (userToken) {
      sessionStorage.setItem('loginData', JSON.stringify(userToken));
      setToken(userToken.access_token);
      Auth.authenticate();
    }
  };

  return {
    setToken: saveToken,
    token
  }
}