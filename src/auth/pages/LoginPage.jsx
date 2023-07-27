import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login('Doug Queme');

    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className='container p-4'>
      <h1>LoginPage</h1>
      <hr />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
        onClick={onLogin}
      >
        Button
      </button>
    </div>
  );
};
