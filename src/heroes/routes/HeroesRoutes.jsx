import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const heroesRoutes = [
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
    path: 'hero',
    element: <HeroPage />,
  },
];
