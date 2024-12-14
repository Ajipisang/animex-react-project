import { FaThumbsUp } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { lazy, Suspense } from "react";
import Skeleton from "../../ui/utils/skeleton";
const CardRecomend=React.lazy(()=>import("../../fragments/home/cardRecomend"))
function Recomended(props){
    const {topAnime}=props
    
    return(
        <section className="mt-12 min-h-[300px]  flex flex-col gap-5 px-4">
            <div className="flex gap-3 items-center text-white">
            <FaFire className="text-2xl" />
            <h1 className="text-2xl font-semibold">Trending</h1>
            </div>

            <div className="flex w-full ">

                <Swiper
                    slidesPerView={2}
                    
                    className="mySwiper"
                >
                  {topAnime.slice(0,10).map((item,index)=>{
                    return(
                        <Suspense fallback={<Skeleton width={"w-full"} height={"h-[250px]"}></Skeleton>}>
                        <SwiperSlide>
                                <CardRecomend item={item}></CardRecomend>
                        </SwiperSlide>
                        </Suspense>
                    )
                  })}
                </Swiper>

               
               
                
            </div>
        </section>
    )
}

export default Recomended