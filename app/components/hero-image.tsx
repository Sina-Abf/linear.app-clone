'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';
import hero from '~/public/images/hero.webp';

const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className='[perspective:2000px] py-[6.4rem] mt-[12.8rem]'
    >
      <div
        className={twMerge(
          'relative bg-hero-gradient border border-transparent-white bg-white bg-opacity-[0.01] rounded-lg',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0',
          inView && 'before:animate-image-glow'
        )}
      >
        <Image
          className={twMerge(
            'relative z-10 transition-opacity delay-[680ms]',
            inView ? 'opacity-100' : 'opacity-0'
          )}
          src={hero}
          alt='hero image'
        />
      </div>
    </div>
  );
};
export default HeroImage;
