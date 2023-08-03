import Search from "./Search";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-center gap-14 lg:gap-20 py-20">
      <div className="mx-auto max-w-sm sm:max-w-2xl text-center text-white">
        <h1 className="text-4xl font-bold leading-snug sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Exploring The World In Comfort.
        </h1>
        <p className="mt-5 px-6 font-medium sm:px-20 sm:text-lg">
          You do not have the right to remain silent… let us know what it takes
          to challenge you
        </p>
      </div>
      <Search />
    </div>
  );
};

export default Hero;
