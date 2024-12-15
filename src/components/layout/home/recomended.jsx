import { FaThumbsUp } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { lazy, Suspense } from "react";
import Skeleton from "../../ui/utils/skeleton";
import { MdKeyboardArrowRight } from "react-icons/md";
const CardRecomend = React.lazy(() =>
  import("../../fragments/home/cardRecomend")
);
function Recomended(props) {
  const { topAnime } = props;

  return (
    <section className="mt-12 lg:px-[100px] min-h-[300px]   flex flex-col gap-5 px-4">
      <div className="w-full  flex justify-between h-[30px]">
        <div className="flex h-full gap-3 items-center text-white">
          <FaFire className="text-2xl lg:text-3xl" />
          <h1 className="text-2xl lg:text-3xl font-semibold">Trending</h1>
        </div>

        <div className="flex h-full  gap-1 items-center">
            <h1 className="text-white lg:text-xl">more</h1>
            <MdKeyboardArrowRight className="text-white w-5 h-5" />
        </div>

      
      </div>

      <div className="flex w-full  ">
        <Swiper 
        slidesPerView={2} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
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
