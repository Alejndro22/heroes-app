// import { Navigate } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';

export const heroesChildrenRoutes = [
  {
    path: 'marvel',
    element: <MarvelPage />,
  },
  {
    path: 'dc',
    element: <DcPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'hero/:id',
    element: <HeroPage />,
  },
  // {
  //   path: '/*',
  //   element: <Navigate to={'/marvel'} replace={true} />,
  // },
];
