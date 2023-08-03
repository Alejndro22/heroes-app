import { render, screen } from '@testing-library/react';
import { PublicRoutes } from '../../src/router/PublicRoutes';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('tests on <PublicRoutes />', () => {
  test('should render children if user not logged', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Public Route</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    // This test only has to make sure that any children is
    // rendered if user is not logged
    expect(screen.getByText('Public Route')).toBeTruthy();
  });

  test('should Navigate if user is logged', () => {
    const contextValue = {
      logged: true,
      user: { id: 'abc', name: 'testing' },
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path='login' element={<h1>Public Route</h1>} />
            </Route>

            <Route path='marvel' element={<h1>Marvel Page</h1>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Marvel Page')).toBeTruthy();
  });
});
