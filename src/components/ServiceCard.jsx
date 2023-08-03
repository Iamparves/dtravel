const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-xl bg-[#FBFCFC] p-7">
      <div className="mb-14 flex h-[90px] w-[90px] items-center justify-center rounded-lg bg-white shadow-serviceIcon">
        <img src={`/${service.icon}`} alt={service.title} />
      </div>
      <h4 className="mb-2 text-2xl font-bold text-[#1E2A39]">
        {service.title}
      </h4>
      <p className="text-[#5C6272]">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
