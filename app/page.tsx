import Hero from "./components/hero";
import Button from "./components/ui/button";
import Container from "./components/container";
import { ArrowIcon } from "./components/icons";
import HeroImage from "./components/hero-image";
import Clients from "~/app/components/clients";
export default function Home() {
  return (
    <>
      <Container className="pt-[6.4rem] pb-[16.4rem] md:pb-[25.6rem]">
        <Hero>
          <Button
            href="/"
            variant="secondary"
            size="small"
            className="animate-fade-in opacity-0 translate-y-[-1rem]"
          >
            <span className="font-medium">Announcing our $35M Series B</span>
            <span className="-mr-[0.6rem] ml-1">
              <ArrowIcon />
            </span>
          </Button>
          <Hero.Title className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
            Linear is a better way <br className="hidden md:block" /> to build
            products
          </Hero.Title>

          <Hero.Subtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </Hero.Subtitle>
          <Button
            href="/"
            variant="primary"
            size="large"
            className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
          >
            Get started
            <span className="-mr-[0.6rem] ml-1 text-off-white">
              <ArrowIcon className="w-[1.6rem] h-[1.6rem]" />
            </span>
          </Button>
          <HeroImage />
        </Hero>
      </Container>

      <Container>
        <Clients />
      </Container>
    </>
  );
}
