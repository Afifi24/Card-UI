import React from "react";
import { GrStar } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
const Cards = ({ image, desc, direction, width,country,title,stars,price }) => {


  return (
    <>
      {/* this is a column card */}

      {/* <div className="p-6 flex flex-row  gap-10  rounded-2xl bg-white">
      <div className="relative">
        <img className="max-w-[350px] rounded-xl" src={image} alt="" />
      </div>

      <div className="flex w-full justify-between items-start mt-3">
        <div className="flex flex-col w-full  gap-4">
          <div className="flex justify-between w-full">
            <div className="w-full">
              <p className="text-gray-400 text-sm ">Casablanca</p>
              <h3 className="  font-bold">Villa Ana de luxe a Marrakech</h3>
            </div>

           <IoMdHeart className=" text-xl  text-red-500  cursor-pointer" />
         </div>
         <div className="w-10 bg-gray-300 h-[1px]  " />
         <p className="text-gray-500">
           4-6 voyageurs: Logemenet entiere .5 Lits .3 Salles de bain Wifi.
           Cuisine. Parking Gratuit
         </p>
         <div className="w-10  bg-gray-300 h-[1px]  " />
         <div className="flex w-full  items-center justify-between">
           <div className="flex gap-1">
             <span className="text-[12px] font-bold">4.91</span>
             <GrStar className="text-orange-500" />{" "} <span className="text-sm text-gray-600">(318 evaluations)</span>
            </div>
            <div>
            <span className="font-bold text-sm ">$200  </span> <span className="text-sm">/nuit</span>
            </div>
     </div>
        </div>

      </div>
   </div> */}

      {/* This is a row card */}

      <div
        className={`p-6 flex flex-${direction} ${width} gap-10  rounded-2xl bg-white`}
      >
        <div className="relative">
          <img className="max-w-[350px] rounded-xl" src={image} alt="" />
        </div>

        <div className="flex w-full justify-between items-start ">
          <div className="flex flex-col w-full  gap-4">
            <div className="flex justify-between items-start w-full">
              <div className="">
                <p className="text-gray-400 text-sm ">{country}</p>
                <h3 className="  font-bold">{title}</h3>
              </div>

              {direction === "col" ? (
                <div className="flex  items-center gap-1">
                  <span className="text-[12px] font-bold">{stars}</span>
                  <GrStar className="text-orange-500" />{" "}
                </div>
              ) : (
                <IoMdHeart className=" text-xl  text-red-500  cursor-pointer" />
              )}
            </div>
            {desc && <div className="w-10 bg-gray-300 h-[1px]  " />}
            {desc && <p className="text-gray-500">{desc}</p>}
            {desc && <div className="w-10 bg-gray-300 h-[1px]  " />}
            <div className="flex   items-center justify-between">
              {desc && (
                <div className="flex gap-1">
                  <span className="text-[12px] font-bold">{stars}</span>
                  <GrStar className="text-orange-500" />{" "}
                  <span className="text-sm text-gray-600">
                    (318 evaluations)
                  </span>
                </div>
              )}
              <div>
                <span className="font-bold text-sm ">${price} </span>{" "}
                <span className="text-sm">/nuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
