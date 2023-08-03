import FeaturedCard from "./FeaturedCard";

const tourPlaces = [
  {
    id: 1,
    name: "Spain",
    img: "spain.png",
    price: 544,
    days: 7,
    nights: 6,
  },
  {
    id: 2,
    name: "Japan",
    img: "japan.png",
    price: 544,
    days: 5,
    nights: 4,
  },
  {
    id: 3,
    name: "London",
    img: "london.png",
    price: 544,
    days: 5,
    nights: 6,
  },
  {
    id: 4,
    name: "Canada",
    img: "canada.png",
    price: 544,
    days: 6,
    nights: 5,
  },
];

const Featured = () => {
  return (
    <section className="py-24 lg:py-40">
      <div className="container">
        <div className="mb-14 text-center lg:mb-20">
          <h2 className="text-4xl font-bold text-[#1E2A39] sm:text-[45px]">
            Featured Tour Places
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5C6272]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:max-w-2xl lg:max-w-none lg:grid-cols-4">
          {tourPlaces.map((place) => (
            <FeaturedCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
