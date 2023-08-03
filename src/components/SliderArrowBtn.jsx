import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SliderArrowBtn = ({ direction, className }) => {
  return (
    <div
      className={`${className} flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-[#152137] transition-colors duration-300 hover:bg-[#152137] hover:text-white sm:h-14 sm:w-14`}
    >
      {direction === "left" ? <GoArrowLeft /> : <GoArrowRight />}
    </div>
  );
};

export default SliderArrowBtn;
