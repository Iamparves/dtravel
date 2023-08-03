import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrowBtn from "./SliderArrowBtn";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Adventurer",
    avatar: "avatar-1.jpg",
    rating: "5",
    description:
      "An unforgettable journey with amazing sights and exceptional service. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Smith",
    designation: "Globe-trotter",
    avatar: "avatar-2.jpg",
    rating: "4",
    description:
      "Experienced the trip of a lifetime! Outstanding guides and seamless arrangements.",
  },
  {
    id: 3,
    name: "Emily Lee",
    designation: "Nature Lover",
    avatar: "avatar-3.jpg",
    rating: "4",
    description:
      "Loved the eco-tour! Stunning landscapes and sustainable travel practices.",
  },
  {
    id: 4,
    name: "David Martinez",
    designation: "Culture Enthusiast",
    avatar: "avatar-4.jpg",
    rating: "5",
    description:
      "Immersive cultural experience. Incredible insights and heartwarming encounters.",
  },
  {
    id: 5,
    name: "Sophia Nguyen",
    designation: "Foodie Traveler",
    avatar: "avatar-5.jpg",
    rating: "3",
    description:
      "Culinary delights at every turn! A gastronomic adventure like no other.",
  },
  {
    id: 6,
    name: "Daniel Brown",
    designation: "History Buff",
    avatar: "avatar-6.jpg",
    rating: "4",
    description:
      "Unraveled the past with insightful historical tours. An enriching experience!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-2 lg:mb-20">
          <div>
            <p className="mb-3 font-semibold uppercase text-[#4141A5]">
              Testimonials
            </p>
            <h3 className="mb-3 text-3xl font-bold leading-snug text-[#292929] lg:text-4xl xl:text-[40px]">
              What our client say
            </h3>
            <p className="max-w-[400px] text-[#5C6272]">
              Create a visual identity for your company, and an overall brand
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5">
            <SliderArrowBtn direction="left" className="testimonials-prev" />
            <SliderArrowBtn direction="right" className="testimonials-next" />
          </div>
        </div>
      </div>
      <div className="container-overflow">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          breakpoints={{
            640: {
              spaceBetween: 35,
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              className="w-[300px] pt-10 lg:w-80"
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
