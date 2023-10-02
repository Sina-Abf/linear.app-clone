import Link from 'next/link';
import Container from './container';
import { GithubIcon, Logo, SlackIcon, TwitterIcon } from './icons';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changlog', href: '#' },
      { title: 'Docks', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About us',
        href: '#'
      },
      {
        title: 'Blog',
        href: '#'
      },
      {
        title: 'Careers',
        href: '#'
      },
      {
        title: 'Customers',
        href: '#'
      },
      {
        title: 'Brand',
        href: '#'
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Community',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      },
      {
        title: 'DPA',
        href: '#'
      },
      {
        title: 'Terms of Service',
        href: '#'
      }
    ]
  },
  {
    title: 'Developers',
    links: [
      {
        title: 'API',
        href: '#'
      },
      {
        title: 'Status',
        href: '#'
      },
      {
        title: 'About us',
        href: '#'
      }
    ]
  }
];

const Footer = () => {
  return (
    <footer className='border-t border-white-a08 py-[5.6rem] mt-12 text-sm'>
      <Container className='flex flex-col lg:flex-row justify-between'>
        <div>
          <div className='flex lg:flex-col flex-row justify-between h-full'>
            <div className='flex text-grey items-center'>
              <Logo className='w-4 h-4 mr-4' />
              Linear - Designed worldwide
            </div>
            <div className='mt-auto flex text-grey gap-x-6'>
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map((col, i) => (
            <div
              className='min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0'
              key={i}
            >
              <h3 className='font-medium mb-3'>{col.title}</h3>
              <ul>
                {col.links.map((link, i) => (
                  <li
                    key={i}
                    className='[&_a]:last:mb-0'
                  >
                    <Link
                      className='text-grey mb-3 block transition-colors hover:text-white'
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
