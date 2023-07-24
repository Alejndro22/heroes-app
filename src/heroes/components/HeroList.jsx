import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroesList = getHeroesByPublisher(publisher);
  return (
    <>
      <ul>
        {heroesList?.map((hero) => {
          return <li key={hero.id}>{hero.superhero}</li>;
        })}
      </ul>
    </>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
