import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroesList = getHeroesByPublisher(publisher);
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center sm:place-items-start gap-y-3 sm:gap-3 py-4'>
        {heroesList?.map((hero) => (
          // send all properties with spread operator
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
