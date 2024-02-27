import React from "react";
import { GrStar } from "react-icons/gr";
const Cards = ({image}) => {
  // {bgImage,title,button}

  const backgroundImage = {};

  return (
    <div className="p-2 rounded-2xl bg-white">
      <img className="max-w-[300px] rounded-xl" src={image} alt="" />
      <div className="flex justify-between mt-3">
        <div>
          <h3 className=" mb-2 font-bold">Fayrous Anaji</h3>
          <p className="text-gray-400 text-sm mb-1">Casablanca</p>
          <p>
            {" "}
            <span className="font-bold text-sm ">$200</span> a nuit{" "}
          </p>
        </div>
        <div>
           <GrStar className="text-orange-500"/>
        </div>
      </div>
    </div>
  );
};

export default Cards;
