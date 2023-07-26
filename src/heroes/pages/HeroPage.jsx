import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Since assets are static, useMemo could be used to improve performance
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to='/' />;
  }

  return (
    <div className='mt-8 grid grid-cols-3 gap-8 animate__animated animate__fadeInLeft'>
      <div className='col-span-1'>
        <img
          src={`./../assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='border border-gray-300 rounded-md p-1 h-64 sm:h-auto'
        />
      </div>

      <div className='col-span-2'>
        <h3 className='mb-4 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>
          {hero.superhero}
        </h3>

        <ul className='list-none text-sm space-y-2'>
          <li>
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <hr />

          <li>
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <hr />

          <li>
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
          <hr />
        </ul>

        <h5 className='mt-3 text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl'>
          Characters
        </h5>

        <p className='text-sm my-2'>{hero.characters}</p>

        <button
          className='mt-2 bg-transparent hover:bg-emerald text-emerald font-semibold hover:text-white py-1 px-4 border border-emerald hover:border-transparent rounded'
          onClick={onNavigateBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
