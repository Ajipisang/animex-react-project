import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Suspense } from "react";
import Skeleton from "../../ui/utils/skeleton";
function ForYou({ recomended }) {
  return (

    <div className="w-full mt-6 z-10 h-full mb-12 flex p-0  flex-col items-center">
      <h1 className="text-2xl text-white font-semibold capitalize">for You</h1>


      <div className="w-full  lg:px-12 px-5 mt-2 h-auto">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
      
          pagination={{
            dynamicBullets: true,
            
          }}
          modules={[EffectCoverflow, Pagination]}
        >
          {recomended.slice(0, 20).map((item, index) => {
            return (
              <Suspense
                fallback={
                  <Skeleton  key={item.mal_id} width={"w-full"} height={"h-[250px]"}></Skeleton>
                }
              >
                <SwiperSlide>
                  <div className="w-auto shadow-lg h-[250px] rounded-lg overflow-hidden ">
                    <img src={item.entry[0].images.jpg.image_url}></img>
                  </div>
                </SwiperSlide>
              </Suspense>
            );
          })}
          {recomended==null && <Skeleton width={"w-full"} height={"h-[250px]"}></Skeleton>}
        </Swiper>
      </div>
     
    </div>
  );
}
export default ForYou;
