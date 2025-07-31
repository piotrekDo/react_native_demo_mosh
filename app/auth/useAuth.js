import jwtDecode from 'jwt-decode';

import authStorage from './storage';
import useAuthStore from './useAuthState';

export default useAuth = () => {
  const { user, setUser } = useAuthStore();

  const logIn = authToken => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
