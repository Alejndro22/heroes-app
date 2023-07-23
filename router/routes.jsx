import { HeroesApp } from '../src/HeroesApp';
import { LoginPage } from '../src/auth/pages/LoginPage';
import { DcPage } from '../src/heroes/pages/DcPage';
import { MarvelPage } from '../src/heroes/pages/MarvelPage';
import ErrorPage from '../src/heroes/pages/ErrorPage';

export const routes = [
  {
    path: '/',
    element: <HeroesApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'marvel',
        element: <MarvelPage />,
      },
      {
        path: 'dc',
        element: <DcPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];
