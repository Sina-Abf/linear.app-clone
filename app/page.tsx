import Image from 'next/image';
import Hero from './components/hero';
import hero from '~/public/images/hero.webp';
export default function Home() {
  return (
    <div>
      <Hero>
        <Hero.Title>
          Linear is a better way <br className='hidden md:block' /> to build
          products
        </Hero.Title>

        <Hero.Subtitle>
          Meet the new standard for modern software development.
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </Hero.Subtitle>
      </Hero>
      <Image
        src={hero}
        alt='hero image'
      />
    </div>
  );
}
