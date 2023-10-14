interface HeroProps {
  children: React.ReactNode;
}
interface HeroElementProps {
  children: React.ReactNode;
}

export const Title = ({ children }: HeroElementProps) => {
  return (
    <h1 className='text-6xl md:text-8xl my-6 text-gradient font-medium tracking-[-0.01em]'>
      {children}
    </h1>
  );
};
export const Subtitle = ({ children }: HeroElementProps) => {
  return (
    <p className='text-lg md:text-xl mb-12 text-primary-text'>{children}</p>
  );
};

const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};
export default Object.assign(Hero, {
  Title,
  Subtitle
});
