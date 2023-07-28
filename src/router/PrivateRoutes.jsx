import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  // useLocation hook returns the current location elements
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
  }, [pathname, search]);

  if (pathname + search === '/') return <Navigate to={'/marvel'} />;

  return logged ? children : <Navigate to={'/login'} />;
};
