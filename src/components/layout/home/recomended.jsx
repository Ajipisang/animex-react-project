import { FaThumbsUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { lazy, Suspense } from "react";
import Skeleton from "../../ui/utils/skeleton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
const CardRecomend = React.lazy(() =>
  import("../../fragments/home/cardRecomend")
);
import { useState, useEffect } from "react";
function Recomended(props) {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const { topAnime,title,nav,icon } = props;
  const [index,setIndex]=useState(0)
  useEffect(()=>{
    console.log(index)
  },[])
  return (
    <section className="mt-12 lg:px-[100px] min-h-[300px]   flex flex-col gap-5 px-4">
      <div className="w-full  flex justify-between h-[30px]">
        <div className="flex h-full gap-3 items-center text-white">
          <span className="text-2xl lg:text-3xl">
            {icon}
          </span>
      
          <h1 className="text-2xl lg:text-3xl font-semibold capitalize">{title}</h1>
        </div>

        <div className="flex h-full  gap-1 items-center">
            <h1 className="text-white lg:text-xl">more</h1>
            <MdKeyboardArrowRight className="text-white w-5 h-5" />
        </div>

      
      </div>

      <div className="flex w-full relative ">
        <div className="w-full flex z-20 justify-between h-[40px] absolute top-1/3 text-white   items-center text-3xl">
        <IoIosArrowBack id={`prevButton${nav}`} className={`bg-[rgba(0,0,0,0.7)] cursor-pointer  ${isFirst && "opacity-0 translate-x-3"} transition-all ease-in-out duration-300 `}/>
        <IoIosArrowForward id={`nextButton${nav}`} className={`bg-[rgba(0,0,0,0.7)] cursor-pointer  ${isLast && "opacity-0 -translate-x-3"} transition-all ease-in-out duration-300 `}/>
        </div>
        <Swiper 
        slidesPerView={2} 
        spaceBetween={30}
        onSlideChange={(swiper) => {
          setIsFirst(swiper.isBeginning);
          setIsLast(swiper.isEnd);
        }}
        navigation={
            {
              prevEl: `#prevButton${nav}`,
              nextEl: `#nextButton${nav}`,
            }
        }
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
  
        className="mySwiper">
          {topAnime.slice(0, 10).map((item, index) => {
            return (
              <Suspense
                fallback={
                  <Skeleton width={"w-full"} height={"h-[250px]"}></Skeleton>
                }
              >
                <SwiperSlide>
                  <CardRecomend item={item}></CardRecomend>
                </SwiperSlide>
              </Suspense>
            );
          })}

          {!topAnime ? (
            <Skeleton width={"w-full"} height={"h-[250px]"}></Skeleton>
          ) : null}
        </Swiper>

      </div>
    </section>
  );
}

export default Recomended;
