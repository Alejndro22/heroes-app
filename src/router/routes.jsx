import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth/pages/LoginPage';
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
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
