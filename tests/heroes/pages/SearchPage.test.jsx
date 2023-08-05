import { fireEvent, render, screen } from '@testing-library/react';
import { routes } from '../../../src/router/MainRoutes';
import { SearchPage } from '../../../src/heroes';
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { AuthContext } from '../../../src/auth';

// Mock useNavigate hook
const mockedUseNavigate = jest.fn();
// Here i tell to keep everything as default, and only useNavigate() will be mocked
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('tests on <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  const contextValue = {
    logged: true,
    user: { id: 'abc', name: 'testing' },
  };

  test('should match snapshot with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test('should display desired value, and the input should be the value of querystring', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/search?q=batman'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');

    //to make sure that card is being displayed, here I check if the image src is correct
    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
  });

  test('should display error if not hero found', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/search?q=batman123'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByText('No hero found with q=batman123')).toBeTruthy();
  });

  test('should call Navigate to the new path', () => {
    const inputValue = 'testingSearch';

    const router = createMemoryRouter(routes, {
      initialEntries: ['/search?q=batman123'],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });

    const form = screen.getByLabelText('form-test');
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
