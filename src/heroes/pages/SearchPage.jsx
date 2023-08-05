import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { AlertBanner, Banner } from '../../ui';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();

  // get query parameters, use query-string to handle easily different parameters
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    // When onSearchSubmit navigate to query parameter path
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Search Page
      </h1>
      <hr />

      <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
        <div className='col-span-5 space-y-2'>
          <h4 className='mt-3 text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl'>
            Searching
          </h4>
          <hr />

          <form
            className='flex flex-col'
            aria-label='form-test'
            onSubmit={onSearchSubmit}
          >
            <input
              type='text'
              placeholder='Search a hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-munsell-blue focus:border-munsell-blue block w-full p-2.5'
            />

            <button className='mt-4 bg-transparent text-munsell-blue hover:bg-munsell-blue hover:text-white font-semibold py-2 px-4 border border-munsell-blue hover:border-transparent rounded w-min'>
              Search
            </button>
          </form>
        </div>

        <div className='col-span-7 space-y-2'>
          <h4 className='mt-3 text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl'>
            Results
          </h4>

          <hr />

          {q === '' ? (
            <Banner content={'Search a hero'} />
          ) : (
            heroes.length === 0 && (
              <AlertBanner
                title={`No hero found with q=${q}`}
                content={'Please search another hero'}
              />
            )
          )}

          <div className='flex flex-col items-center space-y-2'>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
