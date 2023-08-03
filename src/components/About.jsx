import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutCard from "./AboutCard";
import SliderArrowBtn from "./SliderArrowBtn";

const places = [
  {
    id: 1,
    image: "azores.jpg",
    name: "The Azores",
    country: "Portugal",
    description:
      "The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring.",
  },
  {
    id: 2,
    image: "bamboo-grove.jpg",
    name: "Bamboo Grove",
    country: "Japan",
    description:
      "Every traveler should experience the ethereal glow and seemingly endless heights of this bamboo grove on the outskirts of Kyoto.",
  },
  {
    id: 3,
    image: "wulingyuan.jpg",
    name: "Wulingyuan",
    country: "China",
    description:
      "This 100-square-mile attraction in China’s Hunan Province contains thousands of sandstone pillars that are nature’s version of skyscraper",
  },
  {
    id: 4,
    image: "capri.jpg",
    name: "Capri",
    country: "Italy",
    description:
      "Few parts of the world can claim such a range of natural beauty as Italy, with verdant hills to turquoise waters lined by white-sand beaches",
  },
  {
    id: 5,
    image: "cappadocia.jpg",
    name: "Cappadocia",
    country: "Turkey",
    description:
      "Cappadocia is an area in Turkey where entire cities have been carved into rock, is pretty incredible on its own and visually mesmerizing.",
  },
  {
    id: 6,
    image: "mount-fuji.jpg",
    name: "Mount Fuji",
    country: "Japan",
    description:
      "Visit Lake Kawaguchiko in the spring for some of the best views of the mountain and cherry blossom trees—a postcard-worthy sight if we ever saw one.",
  },
];

const About = () => {
  return (
    <section className="py-3">
      <div className="container mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-end lg:mb-16 lg:gap-10 xl:gap-32">
        <div>
          <p className="mb-3 font-semibold uppercase text-[#4141A5]">
            About us
          </p>
          <h3 className="text-3xl font-bold leading-snug text-[#292929] lg:text-4xl xl:text-[40px]">
            Explore all corners of the world with us.
          </h3>
        </div>
        <p className="text-[#5C6272]">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
      </div>
      <div className="container-overflow">
        <div className="relative">
          <div className="absolute left-[calc(535px+(100%-535px)/2)] top-[360px] z-10 hidden -translate-x-1/2 flex-col gap-3 sm:flex md:left-[calc(575px+(100%-575px)/2)] md:top-[390px] md:flex-row xl:left-[845px]">
            <SliderArrowBtn direction="left" className="about-prev" />
            <SliderArrowBtn direction="right" className="about-next" />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={35}
            slidesPerView={"auto"}
            loop={true}
            speed={400}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: ".about-prev",
              nextEl: ".about-next",
            }}
          >
            {places.map((place) => (
              <SwiperSlide
                className="about-slide pr-4 sm:max-w-[500px] sm:pr-0 md:max-w-[540px]"
                key={place.id}
              >
                <AboutCard place={place} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
