import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-900 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between md:w-auto md:static md:block md:justify-start'>
            <Link
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
              to='/'
            >
              Asociaciones
            </Link>

            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg width='24' height='24'>
                <path
                  d='M5 6h14M5 12h14M5 18h14'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              'md:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <div className='flex flex-col md:flex-row list-none '>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  hover:opacity-100 text-md leading-md ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  } `
                }
                to='/marvel'
              >
                <span className='ml-2'>Marvel</span>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-100 text-md leading-md ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  } `
                }
                to='/dc'
              >
                <span className='ml-2'>DC</span>
              </NavLink>
            </div>

            <div className='flex flex-col md:flex-row list-none md:ml-auto'>
              <span className='nav-item nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-earth-yellow hover:opacity-100 text-md leading-md'>
                Doug
              </span>
              <button className='nav-item nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-mountbatten-pink hover:opacity-100 text-md leading-md'>
                <span className='ml-2'>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
