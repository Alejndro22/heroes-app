import {
  MemoryRouter,
  RouterProvider,
  Route,
  Routes,
  createMemoryRouter,
} from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { routes } from '../../../src/router/MainRoutes';
import { HeroPage } from '../../../src/heroes';
import { fireEvent, render, screen } from '@testing-library/react';

// Mock useNavigate hook
const mockedUseNavigate = jest.fn();
// Here i tell to keep everything as default, and only useNavigate() will be mocked
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('tests on <HeroPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  const contextValue = {
    logged: true,
    user: { id: 'abc', name: 'testing' },
  };

  test('should match snapshot', () => {
    // Here I used MemoryRouter because i didn't want to evaluate the Outlet logic,
    // just the page by itself
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/hero/dc-arrow']}>
          <Routes>
            <Route path='/hero/:id' element={<HeroPage />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render page by Hero if found', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/hero/dc-arrow'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <HeroPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const heroTitle = screen.getByRole('heading', { level: 3 });
    const img = screen.getByRole('img');

    expect(heroTitle.innerHTML).toEqual('Green Arrow');
    expect(img.src).toContain('/assets/heroes/dc-arrow.jpg');
  });

  test('should Navigate to /marvel if hero not found', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/hero/hero-not-found'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <HeroPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Marvel Comics')).toBeTruthy();
  });

  test('should Navigate to last path visited when button is clicked', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/hero/dc-arrow'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <HeroPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const backBtn = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(backBtn);

    expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
  });
});
