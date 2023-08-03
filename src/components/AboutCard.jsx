import { BiSolidQuoteAltLeft } from "react-icons/bi";

const AboutCard = ({ place }) => {
  const { name, image, country, description } = place;

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl md:max-w-none">
      <img
        src={`/${image}`}
        alt={name}
        className="h-[240px] w-full object-cover sm:h-[290px]"
      />
      <div className="about-slide-content invisible grid translate-y-10 grid-rows-1 bg-white px-7 pb-7 opacity-0 sm:px-11 sm:pb-11 ">
        <div className="quote-icon flex h-20 w-20 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-white text-3xl text-black shadow-quoteIcon">
          <BiSolidQuoteAltLeft />
        </div>
        <h2 className="-mt-2 mb-4 text-2xl font-semibold text-[#292929] sm:mt-0 sm:text-3xl">
          {name}, {country}
        </h2>
        <p className="leading-relaxed text-[#5C6272]">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
