import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        DC Comics
      </h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </>
  );
};
