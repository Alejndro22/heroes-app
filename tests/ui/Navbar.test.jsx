import { fireEvent, render, screen } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
  useNavigate,
} from 'react-router-dom';
import { routes } from '../../src/router/MainRoutes';
import { Navbar } from '../../src/ui/components/Navbar';
import { AuthContext } from '../../src/auth';

// Mock useNavigate hook
const mockedUseNavigate = jest.fn();
// Here i tell to keep everything as default, and only useNavigate() will be mocked
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('tests on <Navbar />', () => {
  const logoutMock = jest.fn();

  const contextValue = {
    logged: true,
    user: { id: 'abc', name: 'testing' },
    logout: logoutMock,
  };

  beforeEach(() => jest.clearAllMocks());

  test('should display user name that is logged', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/dc'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByLabelText('username').innerHTML).toEqual(
      contextValue.user.name
    );
  });

  test('should call logout from context and navigate when logout button is clicked', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/dc'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByLabelText('logout');
    fireEvent.click(logoutBtn);

    expect(logoutMock).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
