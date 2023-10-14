import { twMerge } from 'tailwind-merge';

interface HeroProps {
  children: React.ReactNode;
}
interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={twMerge(
        'text-6xl md:text-8xl my-6 text-gradient font-medium tracking-[-0.01em]',
        className
      )}
    >
      {children}
    </h1>
  );
};
export const Subtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={twMerge(
        'text-lg md:text-xl mb-12 text-primary-text',
        className
      )}
    >
      {children}
    </p>
  );
};

const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};
export default Object.assign(Hero, {
  Title,
  Subtitle
});
