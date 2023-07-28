import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Doug Queme');

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className='container mx-auto px-4 pt-8'>
      <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        LoginPage
      </h1>
      <hr />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4'
        onClick={onLogin}
      >
        Button
      </button>
    </div>
  );
};
