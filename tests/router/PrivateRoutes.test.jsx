import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoutes } from '../../src/router/PrivateRoutes';

describe('tests on <PrivateRoutes />', () => {
  test('should render children if user is logged', () => {
    // Useful to check if LocalStorage was called, Storage here comes from Node
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: { id: 'abc', name: 'testing' },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoutes>
            <h1>Private Route</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Private Route')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });

  test('should Navigate to login if user is not logged', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route path='login' element={<h1>Public Page</h1>} />

            <Route element={<PrivateRoutes />}>
              <Route path='marvel' element={<h1>Private Page</h1>} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Public Page')).toBeTruthy();
  });
});
