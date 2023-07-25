import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;

  return <p className='text-sm text-gray-600'>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageURL = `/assets/heroes/${id}.jpg`;

  return (
    <div className='max-w-sm w-full sm:max-w-full sm:flex sm:h-full border rounded-md border-gray-200 animate__animated animate__fadeIn'>
      <div className='h-96 sm:h-auto sm:w-24 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l overflow-hidden'>
        <img src={heroImageURL} alt={superhero} />
      </div>

      <div className='p-4 flex gap-y-2 flex-col w-full text-ellipsis overflow-hidden'>
        <div className='text-gray-900 font-bold text-xl mb-2 leading-tight'>
          {superhero}
        </div>

        <p className='text-sm text-gray-600'>{alter_ego}</p>

        {/* {alter_ego !== characters && (
          <p className='text-sm text-gray-600'>{characters}</p>
        )} */}

        {/* alternative to the ternary above with component */}
        <CharactersByHero alter_ego={alter_ego} characters={characters} />

        <p className='text-sm text-gray-300'>{first_appearance}</p>

        <Link className='text-sm text-munsell-blue' to={`/hero/${id}`}>
          More info
        </Link>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
