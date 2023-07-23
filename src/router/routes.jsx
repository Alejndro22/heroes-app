import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth/pages/LoginPage';
import { DcPage, MarvelPage } from '../heroes';
import ErrorPage from '../heroes/pages/ErrorPage';

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
