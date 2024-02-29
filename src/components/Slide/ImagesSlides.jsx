import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";


const ImagesSlide = ({slideImages}) => {

  return (
    <div className="   md:max-w-[400px]  p-0 overflow-hidden rounded-lg m-auto">
      <Swiper
        className="pb-[1rem]  "
        style={{ zIndex: 1 }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        centeredSlides={true}
      >
        {slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex relative w-full  overflow-hidden  md:h-fit rounded-lg  flex-col items-center justify-center">
              <div className="absolute h-full w-full  bg-black bg-opacity-15" />
              <img
                className="w-fit h-[250px] object-cover flex items-start"
                src={item.image}
                loading="lazy"
                alt={item.id}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSlide;
