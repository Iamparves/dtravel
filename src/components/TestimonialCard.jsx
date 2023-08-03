import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TestimonialCard = ({ testimonial }) => {
  const { name, avatar, designation, rating, description } = testimonial;
  const ratingStar = [];
  for (let i = 1; i <= 5; i++) {
    ratingStar.push(
      i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />,
    );
  }

  return (
    <div className="rounded-xl bg-white px-8 pb-8">
      <img
        className="mx-auto h-20 w-20 -translate-y-1/2 rounded-full object-cover"
        src={`/avatars/${avatar}`}
        alt={name}
      />
      <div className="-mt-2 mb-7 border-b pb-5 text-center">
        <h4 className="text=[#292929] mb-1 text-xl font-semibold">{name}</h4>
        <p className="text-sm font-medium text-[#6D7487]">{designation}</p>
      </div>
      <div className="mb-4 flex text-lg text-[#FAB33F]">{ratingStar}</div>
      <p className="leading-relaxed text-[#646670]">{description}</p>
    </div>
  );
};

export default TestimonialCard;
