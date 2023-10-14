import Image from 'next/image';
import Hero from './components/hero';
import hero from '~/public/images/hero.webp';
import Button from './components/ui/button';
import Container from './components/container';
import { ArrowIcon } from './components/icons';
export default function Home() {
  return (
    <Container className='mt-[6.4rem]'>
      <Hero>
        <Button
          href='/'
          variant='secondary'
          size='small'
        >
          <span className='font-medium'>Announcing our $35M Series B</span>
          <span className='-mr-[0.6rem] ml-1'>
            <ArrowIcon />
          </span>
        </Button>
        <Hero.Title>
          Linear is a better way <br className='hidden md:block' /> to build
          products
        </Hero.Title>

        <Hero.Subtitle>
          Meet the new standard for modern software development.
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </Hero.Subtitle>
        <Button
          href='/'
          variant='primary'
          size='large'
        >
          Get started
          <span className='-mr-[0.6rem] ml-1 text-off-white'>
            <ArrowIcon className='w-[1.6rem] h-[1.6rem]' />
          </span>
        </Button>
      </Hero>
      <Image
        className='mt-[12.8rem]'
        src={hero}
        alt='hero image'
      />
    </Container>
  );
}
