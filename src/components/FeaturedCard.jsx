import { PiClockCountdownLight } from "react-icons/pi";

const FeaturedCard = ({ place }) => {
  return (
    <div className="max-w-[320px] rounded-xl bg-white p-4 mx-auto">
      <img
        className="mb-5 w-full rounded-xl"
        src={place.img}
        alt={place.name}
      />
      <h3 className="mb-3 text-2xl font-bold text-[#1E2A39]">{place.name}</h3>
      <div className="flex items-center justify-between gap-5">
        <p className="flex items-center gap-1 font-medium leading-tight text-[#7C8290]">
          <span className="text-xl">
            <PiClockCountdownLight />
          </span>
          <span>
            {place.days} Days/{place.nights} Nights
          </span>
        </p>
        <p className="font-semibold text-[#EE6D52]">
          ${place.price.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
