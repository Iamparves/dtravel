import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "destination.png",
    title: "Select Destination",
    description: "At first choose the place you wanted to go",
  },
  {
    id: 2,
    icon: "trip.png",
    title: "Book a Trip",
    description: "book your tip form our exclusive offers",
  },
  {
    id: 3,
    icon: "person.png",
    title: "Take your flight",
    description: "Take your flight on selected date and joy",
  },
];

const Service = () => {
  return (
    <section className="py-24 lg:py-40">
      <div className="container">
        <div className="mb-14 text-center lg:mb-20">
          <h2 className="text-4xl font-bold text-[#1E2A39] sm:text-[45px]">
            We Provide Best
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#5C6272]">
            Embark on a symphony of unparalleled travel experiences and unlock
            the world&apos;s most exquisite destinations
          </p>
        </div>
        <div className="mx-auto grid max-w-[340px] grid-cols-1 gap-10 sm:max-w-full sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
