import { render, screen } from '@testing-library/react';
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { routes } from '../../src/router/MainRoutes';
import { AppRouter } from '../../src/router/AppRouter';

describe('tests on <AppRouter />', () => {
  test('should display login if user is not logged', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/login'],
    });

    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

  test('should display <Marvel /> if user is logged', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/marvel'],
    });

    const contextValue = {
      logged: true,
      user: { id: 'abc', name: 'testing' },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(screen.getByText('Marvel Comics')).toBeTruthy();
  });
});
