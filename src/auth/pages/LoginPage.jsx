import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', { replace: true });
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
