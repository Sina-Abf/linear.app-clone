interface HeroProps {
  children: React.ReactNode;
}
interface HeroElementProps {
  children: React.ReactNode;
}

export const Title = ({ children }: HeroElementProps) => {
  return <h1 className='text-5xl my-6'>{children}</h1>;
};
export const Subtitle = ({ children }: HeroElementProps) => {
  return <p className='text-lg mb-12'>{children}</p>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};
export default Object.assign(Hero, {
  Title,
  Subtitle
});
