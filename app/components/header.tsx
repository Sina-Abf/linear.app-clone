import Link from 'next/link';
import Container from './container';
import { Logo } from './icons';
import Button from './ui/button';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[30px] saturate-[120%] px-8'>
      <Container className='flex h-[var(--navigation-height)] items-center'>
        <Link href='/'>
          <Logo />
        </Link>

        <nav className='h-full'>
          <ul className='flex items-center h-full [&_a]:text-sm [&_li]:ml-6'>
            <li>
              <Link href='/'>Features</Link>
            </li>
            <li>
              <Link href='/'>Method</Link>
            </li>
            <li>
              <Link href='/'>Customers</Link>
            </li>
            <li>
              <Link href='/'>Changelog</Link>
            </li>
            <li>
              <Link href='/'>Integrations</Link>
            </li>
            <li>
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

        <div className='ml-auto h-full flex items-center'>
          <Link
            className='text-sm mr-6'
            href='/'
          >
            Log in
          </Link>
          <Button href='/'>Sign up</Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
