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
        <svg
          className={twMerge(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
        >
          <path
            pathLength='1'
            d='M1500 72L220 72'
          ></path>
          <path
            pathLength='1'
            d='M1500 128L220 128'
          ></path>
          <path
            pathLength='1'
            d='M1500 189L220 189'
          ></path>
          <path
            pathLength='1'
            d='M220 777L220 1'
          ></path>
          <path
            pathLength='1'
            d='M538 777L538 128'
          ></path>
        </svg>
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
