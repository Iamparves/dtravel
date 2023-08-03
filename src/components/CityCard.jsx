const CityCard = ({ city }) => {
  const bgImg = { backgroundImage: `url("/${city.img}")` };
  return (
    <div
      className="mx-auto h-[480px] max-w-[360px] overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat sm:h-[420px] md:h-[480px]"
      style={bgImg}
    >
      <div className="flex h-full w-full flex-col items-start justify-between bg-gradient-to-b from-black/10 to-black/30 p-7">
        <p className="rounded-full bg-white/20 px-5 py-2 text-xl font-semibold text-[#E9EBF3] backdrop-blur-sm backdrop-brightness-105 backdrop-opacity-70">
          {city.name}
        </p>
        <div className="text-white">
          <h3 className="text-3xl font-bold mb-1">{city.name}</h3>
          <p className="font-medium">{city.totalPlace} popular places</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
