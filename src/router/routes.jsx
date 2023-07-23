import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth/pages/LoginPage';
import { heroesRoutes } from '../heroes';
import ErrorPage from '../heroes/pages/ErrorPage';

export const routes = [
  {
    path: '/',
    element: <HeroesApp />,
    errorElement: <ErrorPage />,
    children: heroesRoutes,
  },

  {
    path: 'login',
    element: <LoginPage />,
  },
];
