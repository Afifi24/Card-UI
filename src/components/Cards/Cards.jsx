import React from "react";
import { GrStar } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
import ImagesSlide from "../Slide/ImagesSlides";
const Cards = ({
  direction,
  width,
  card
}) => {


  const widthStyle ={
    full: 'w-full',
    default:' lg:max-w-[400px]'
  }
  const directionStyle ={
    row: 'flex-row',
    default:'flex-col'
  }

  const Styles = `${widthStyle[width]} ${directionStyle[direction]}`

  
  return (
    <>
      <div
        className={`p-6 flex ${Styles}   gap-10  rounded-2xl bg-white`}
      >
        <div className="relative ">
          <ImagesSlide slideImages={card.slideImages}/>
        </div>
      

        <div className="flex w-full  justify-between items-start ">
          <div className="flex flex-col w-full  gap-4">
            <div className="flex justify-between items-start w-full">
              <div className="">
                <p className="text-gray-400 text-[14px] text-sm ">{card.country}</p>
                <h3 className=" text-[16px] font-bold">{card.title}</h3>
              </div>

              {direction === "default" ? (
                <div className="flex  items-center gap-1">
                  <span className="text-[14px] font-[400]">{card.stars}</span>
                  <GrStar className="text-orange-500 w-[16px] h-[16px]" />{" "}
                </div>
              ) : (
                <IoMdHeart className=" text-xl  text-red-500  cursor-pointer" />
              )}
            </div>
            {card.desc && <div className="w-10 bg-gray-300 h-[2px]  " />}

            {card.desc && <p className="text-gray-500 text-[14px]">{card.desc}</p>}
            {card.desc && <div className="w-10 bg-gray-300 h-[2px]  " />}
            <div className="flex   items-center justify-between">
              {card.desc && (
                <div className="flex gap-1">
                  <span className="text-[14px] font-[400] ">{card.stars}</span>
                  <GrStar className="text-orange-500 w-[16px] h-[16px]"  />{" "}
                  <span className="text-sm text-gray-600">
                    (318 evaluations)
                  </span>
                </div>
              )}
              <div>
                <span className="font-extrabold text-[14px] ">${card.price} </span>{" "}
                <span className="text-sm  text-gray-600">/nuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
