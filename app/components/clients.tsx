import {
  ArcIcon,
  CashAppIcon,
  DescriptIcon,
  LoomIcon,
  MercuryIcon,
  RampIcon,
  RaycastIcon,
  RemoteIcon,
  RetoolIcon,
  RunawayIcon,
  SupercellIcon,
  VercelIcon,
} from "~/app/components/icons";

const Clients = () => {
  return (
    <>
      <p className="mb-12 text-lg md:text-xl leading-[1.3] text-center">
        <span className="text-primary-text">
          Powering the world’s best product teams.
        </span>
        <br className="hidden md:block" />
        From next-gen startups to established enterprises.
      </p>
      <div className="[&_svg]:max-w-[16rem] gap-x-6 gap-y-8 grid grid-cols-2 place-items-center md:grid-cols-6">
        <RampIcon />
        <LoomIcon className="hidden md:block" />
        <VercelIcon />
        <DescriptIcon className="hidden md:block" />
        <CashAppIcon />
        <SupercellIcon />
        <MercuryIcon />
        <RetoolIcon />
        <RemoteIcon className="hidden md:block" />
        <ArcIcon className="hidden md:block" />
        <RaycastIcon className="hidden md:block" />
        <RunawayIcon className="hidden md:block" />
      </div>
    </>
  );
};

export default Clients;
