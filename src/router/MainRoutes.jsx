import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { heroesChildrenRoutes } from './HeroesRoutes';
import ErrorPage from '../heroes/pages/ErrorPage';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const routes = [
  {
    path: '/login',
    element: (
      <PublicRoutes>
        <LoginPage />
      </PublicRoutes>
    ),
  },

  {
    path: '/',
    element: (
      <PrivateRoutes>
        <HeroesRoutes />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: heroesChildrenRoutes,
  },

  // For reference, this works when there's no need to check private/public routes
  // { path: 'login', element: <LoginPage /> },
];
