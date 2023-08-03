const partners = [
  {
    id: 1,
    name: "Amadeus",
    logo: "partner-1.png",
  },
  {
    id: 2,
    name: "Booking.com",
    logo: "partner-2.png",
  },
  {
    id: 3,
    name: "Trivago",
    logo: "partner-3.png",
  },
  {
    id: 4,
    name: "Trainline",
    logo: "partner-4.png",
  },
  {
    id: 5,
    name: "Cheapflights",
    logo: "partner-5.png",
  },
  {
    id: 6,
    name: "Momondo",
    logo: "partner-6.png",
  },
];

const Partner = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="mb-14 text-center lg:mb-20">
          <h2 className="text-4xl font-bold text-[#1E2A39] sm:text-[45px]">
            Our Tour Partner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5C6272]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
          {partners.map((partner) => (
            <img
              className="w-36 sm:w-48"
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
