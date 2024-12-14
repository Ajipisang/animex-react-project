import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BoxReveal from "../../ui/magic ui/box";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import CardHeader from "../../fragments/home/cardheader";

import Skeleton from "../../ui/utils/skeleton";
function Header(props) {
  const { topAnime } = props;
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  return (
    <>
      <Swiper
        navigation={{
          prevEl: "#prevButton",
          nextEl: "#nextButton",
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setIsFirst(swiper.isBeginning);
          setIsLast(swiper.isEnd);
        }}
        allowTouchMove={false}
        className="mySwiper relative"
      >
        <div className="w-full h-full flex justify-between absolute top-1/2 left-0 z-10 ">
          <span id="prevButton">
            <IoIosArrowBack
              className={`w-[30px] ${
                isFirst ? "opacity-0 translate-x-[-30px]" : "opacity-100"
              } transition-all ease-in-out duration-300 h-[30px] text-white z-20`}
            />
          </span>
          <span id="nextButton">
            <IoIosArrowForward
              className={`w-[30px] ${
                isLast ? "opacity-0 translate-x-[30px]" : "opacity-100"
              } transition-all ease-in-out duration-300 h-[30px] text-white z-20`}
            />
          </span>
        </div>
        {topAnime.slice(0, 4).map((item, index) => {
          return (
            <Suspense
              fallback={
                <Skeleton width={"w-full"} height={"h-[308px]"}></Skeleton>
              }
            >
              <SwiperSlide key={index}>
                <CardHeader item={item}></CardHeader>
              </SwiperSlide>
            </Suspense>
          );
        })}
      </Swiper>
    </>
  );
}

export default Header;
