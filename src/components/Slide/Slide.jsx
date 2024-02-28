import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';


import image1 from '../../assets/slides/slide1.jpg'
import image2 from '../../assets/slides/slide2.jpg'
import image3 from '../../assets/slides/slide3.jpg'
import image4 from '../../assets/slides/slide4.jpg'
import image5 from '../../assets/slides/slide5.jpg'

const images = [
  {
    image:image1,
    id:1
  },
  {
    image:image2,
    id:2
  },
  {
    image:image3,
    id:3
  },
  {
    image:image4,
    id:4
  },
  {
    image:image5,
    id:5
  },
]
const Slide = () => {
  return (
    <div className="  max-w-[400px] p-0 overflow-hidden rounded-lg m-auto">
    
       <Swiper
          className="pb-[1rem] specific-swiper "
          style={{ zIndex: 1 }}
          modules={[Navigation,Pagination]}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              // spaceBetween: -100,
              // slidesPerView: 1.5,
            },
            1024: {
              // spaceBetween: -100,
              // slidesPerView: 1.5,
            },
            1200: {
              // spaceBetween: -150,
              // slidesPerView: 1.2,
            },
            1400: {
              // spaceBetween: -110,
              // slidesPerView: 1.2,
            },
            1500: {
              // spaceBetween: -350,
              // slidesPerView: 1.2,
            },
          }}
          centeredSlides={true}
        >
          
          {  images.map(item=>(
             <SwiperSlide key={item.id} >
             
             <div
               className="flex relative  overflow-hidden  md:h-fit rounded-lg  flex-col items-center justify-center"
             >
              <div className="absolute h-full w-full  bg-black bg-opacity-25"/>
            
               <img
                 className="w-full h-full"
                 src={item.image}
                 loading='lazy'
                 alt={item.id}
               />
             </div>
           
         </SwiperSlide>
          ))}
        
        </Swiper>
    </div>
  );
};

export default Slide;
