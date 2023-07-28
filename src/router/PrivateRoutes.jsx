import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? children : <Navigate to={'/login'} />;
};
