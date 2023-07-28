import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './MainRoutes';

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
