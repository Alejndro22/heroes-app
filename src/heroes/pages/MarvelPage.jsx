import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Marvel Comics
      </h1>
      <hr />

      <HeroList publisher='Marvel Comics' />
    </>
  );
};
