'use client';

import Link from 'next/link';
import Container from './container';
import { HamburgerIcon, Logo } from './icons';
import Button from './ui/button';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');

    if (html) html.classList.toggle('overflow-hidden', hamburgerIsOpen);
  }, [hamburgerIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerIsOpen(false);
    window.addEventListener('orientationchange', closeHamburgerNavigation);
    window.addEventListener('resize', closeHamburgerNavigation);
    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation);
      window.removeEventListener('resize', closeHamburgerNavigation);
    };
  }, []);
  return (
    <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[30px] saturate-[120%]'>
      <Container className='flex h-navigation-height items-center'>
        <Link
          className='flex items-center'
          href='/'
        >
          <Logo /> <span className='ml-2 text-medium'>Linear</span>
        </Link>

        <div
          className={twMerge(
            'transition-[visibility] md:visible',
            hamburgerIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={twMerge(
              'h-[calc(100vh_-_var(--navigation-height))] md:opacity-100 transition-opacity duration-500 md:block fixed md:relative top-navigation-height md:top-0 md:h-auto md:w-auto left-0 w-full overflow-auto bg-background md:bg-transparent md:translate-x-0 md:transition-none',
              hamburgerIsOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[-100vw]'
            )}
          >
            <ul
              className={twMerge(
                'flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-b-grey-dark [&_li]:md:border-none',
                '[&_a]:text-medium [&_a]:h-navigation-height [&_a]:flex [&_a]:items-center [&_a]:w-full [&_a]:md:text-sm [&_li]:ml-6 [&_a:hover]:text-grey',
                'ease-in [&_a]:duration-300 [&_a]:translate-y-8 [&_a]:md:translate-y-0 [&_a]:[color,transform] [&_a]:md:transition-colors',
                hamburgerIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href='/'>Features</Link>
              </li>
              <li>
                <Link href='/'>Method</Link>
              </li>
              <li>
                <Link href='/'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Integrations</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Pricing</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
              <li>
                <Link href='/'>Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-auto h-full flex items-center'>
          <Link
            className='text-sm mr-6'
            href='/'
          >
            Log in
          </Link>
          <Button href='/'>Sign up</Button>
        </div>

        <button
          onClick={() => setHamburgerIsOpen((prev) => !prev)}
          className='ml-6 md:hidden'
        >
          <span className='sr-only'>Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
export default Header;
