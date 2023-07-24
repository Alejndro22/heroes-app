import PropTypes from 'prop-types';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageURL = `/assets/heroes/${id}.jpg`;

  return (
    <div className='max-w-sm w-full sm:max-w-full sm:flex border rounded-md border-gray-200'>
      <div className='h-60 sm:h-auto sm:w-24 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l overflow-hidden'>
        <img src={heroImageURL} alt={superhero} />
      </div>
      <div className='p-4 flex gap-y-2 flex-col w-full'>
        <div className='text-gray-900 font-bold text-xl mb-2 leading-tight'>
          {superhero}
        </div>
        <p className='text-sm text-gray-600'>{alter_ego}</p>
        <p className='text-sm text-gray-600'>{characters}</p>
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
