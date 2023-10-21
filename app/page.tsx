import Hero from "./components/hero";
import Button from "./components/ui/button";
import Container from "./components/container";
import { ArrowIcon, StartsIllustration } from "./components/icons";
import HeroImage from "./components/hero-image";
import Clients from "~/app/components/clients";
import { twMerge } from "tailwind-merge";
export default function Home() {
  return (
    <div className="overflow-hidden">
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
        <div
          className={twMerge(
            "h-[60rem] overflow-hidden my-[-12.8rem] relative mask-radial-faded",
            "before:absolute before:opacity-[0.4] before:bg-radial-faded before:inset-0 [--color:#7877C6]",
            "after:absolute after:bg-background after:w-[200%] after:-left-1/2 after:aspect-[1_/_0.7] after:rounded-[50%] after:border-t after:border-t-[rgba(120,_118,_197,_0.4)] after:top-1/2",
          )}
        >
          <StartsIllustration className="absolute top-1/2 left-1/2 [transform:translate(-50%,_-50%)] mask-svg" />
        </div>
      </Container>
    </div>
  );
}
