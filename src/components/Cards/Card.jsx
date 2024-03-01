import React, { useState } from "react";
import { GrStar } from "react-icons/gr";
import redHeart from "../../assets/redHeart.png";
import outlinedHeart from "../../assets/outlinedHeart.png";
import whiteheart from "../../assets/heart.png";
import outlinedheartblack from "../../assets/heart2.png";

// todo Slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";


const ImagesSlide = ({slideImages}) => {

  return (
    <div className="   w-full  p-0 overflow-hidden rounded-lg m-auto">
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






// todo card

const Card = ({ direction, data }) => {
  const directionStyle = {
    row: "md:flex-row flex-col",
    default: "flex-col w-[400px]",
  }; 
  
  const Styles = ` ${directionStyle[direction] || directionStyle.default}`;
  const { title, price, stars, desc, country, slideImages } = data;
  const [isLiked, setIsLiked] = useState(false);
  const LikeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <div className={`p-6 flex  ${Styles}  gap-10  rounded-2xl bg-gray-100`}>
        <div className={`relative w-full  ${direction ==='row' && 'md:w-1/3'}`}>
          <ImagesSlide slideImages={slideImages} />
          {!desc && (
            <div
              onClick={LikeHandler}
              className="absolute w-[20px] z-40  right-6 top-4  cursor-pointer"
            >
              {isLiked ? (
                <img src={whiteheart} alt="heart" />
              ) : (
                <img src={outlinedHeart} alt="heart" />
              )}
            </div>
          )}
        </div>
        <div className={`"flex ${ desc ==='row' && 'md:w-2/3'}    justify-between items-start "`}>
          <div className="flex flex-col w-full  gap-4">
            <div className="flex justify-between items-start w-full">
              <div className="">
                <p className="text-gray-400 text-[14px] text-sm ">{country}</p>
                <h3 className=" text-[16px] font-bold">{title}</h3>
              </div>
              {!desc ? (
                <div className="flex  items-center gap-1">
                  <span className="text-[14px] font-[400]">{stars}</span>
                  <GrStar className="text-orange-500 w-[16px] h-[16px]" />{" "}
                </div>
              ) : (
                <div onClick={LikeHandler} className="w-[20px]  cursor-pointer">
                  {isLiked ? (
                    <img src={redHeart} alt="heart" />
                  ) : (
                    <img src={outlinedheartblack} alt="heart" />
                  )}
                </div>
              )}
            </div>
            {desc && <div className="w-10 bg-gray-300 h-[2px]  " />}

            {desc && <p className="text-gray-500 text-[14px]">{desc}</p>}
            {desc && <div className="w-10 bg-gray-300 h-[2px]  " />}
            <div className="flex   items-center justify-between">
              {desc && (
                <div className="flex gap-1">
                  <span className="text-[14px] font-[400] ">{stars}</span>
                  <GrStar className="text-orange-500 w-[16px] h-[16px]" />{" "}
                  <span className="text-sm text-gray-600">
                    (318 evaluations)
                  </span>
                </div>
              )}
              <div>
                <span className="font-extrabold text-[14px] ">${price} </span>{" "}
                <span className="text-sm  text-gray-600">/nuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
