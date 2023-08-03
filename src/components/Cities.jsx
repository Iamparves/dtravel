import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "./CityCard";
import SliderArrowBtn from "./SliderArrowBtn";

const cities = [
  {
    id: 0,
    name: "Bangladesh",
    img: "bangladesh-city.jpg",
    totalPlace: 8,
  },
  {
    id: 1,
    name: "Japan",
    img: "japan-city.png",
    totalPlace: 10,
  },
  {
    id: 2,
    name: "Bali",
    img: "bali-city.png",
    totalPlace: 6,
  },
  {
    id: 3,
    name: "Spain",
    img: "spain-city.png",
    totalPlace: 8,
  },
  {
    id: 4,
    name: "Australia",
    img: "australia-city.jpg",
    totalPlace: 12,
  },
  {
    id: 5,
    name: "Canada",
    img: "canada-city.jpg",
    totalPlace: 8,
  },
  {
    id: 6,
    name: "France",
    img: "france-city.jpg",
    totalPlace: 7,
  },
  {
    id: 7,
    name: "China",
    img: "china-city.jpg",
    totalPlace: 10,
  },
];

const Cities = () => {
  return (
    <section className="py-24 lg:py-40">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-2 lg:mb-20">
          <div>
            <p className="mb-3 font-semibold uppercase text-[#4141A5]">
              Top Citys
            </p>
            <h3 className="mb-3 text-3xl font-bold leading-snug text-[#292929] lg:text-4xl xl:text-[40px]">
              Our popular cities
            </h3>
            <p className="max-w-[400px] text-[#5C6272]">
              We’re a team of humans with the strategy, tools, and solutions and
              digital products.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5">
            <SliderArrowBtn direction="left" className="cities-prev" />
            <SliderArrowBtn direction="right" className="cities-next" />
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={35}
            slidesPerView={1}
            navigation={{ prevEl: ".cities-prev", nextEl: ".cities-next" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1170: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
            }}
          >
            {cities.map((city) => (
              <SwiperSlide key={city.id}>
                <CityCard city={city} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Cities;
