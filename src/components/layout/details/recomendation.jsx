import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CardRecomendedDetails from '../../ui/details/cardrecomend';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
function RecomendedAnime({data}){
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(true);
    return(
        <div className="px-2 flex flex-col gap-3  w-full  mt-8 ">
            <div className='w-full flex items-center justify-between'>
                <div className="flex h-[20px] items-center gap-2">
                    <div className="w-[4px] h-full bg-purpleLight"></div>
                    <h1 className="text-xl text-white capitalize lg:text-2xl font-semibold" >more like this</h1>
                </div>
                <div className='flex text-sm  gap-2'>
                <FaArrowLeftLong id='prevButtonRecomended' className={` text-white cursor-pointer ${isStart && 'opacity-50'}`} />
                <FaArrowLeftLong id='nextButtonRecomended' className={`rotate-180 cursor-pointer text-white ${isEnd && 'opacity-50'}`} />
                </div>
            </div>
            
            <div className="flex w-full justify-center gap-2 ">
                <Swiper
                slidesPerView={2.5}
                navigation={
                    {
                        prevEl: "#prevButtonRecomended",
                        nextEl: "#nextButtonRecomended",
                    }
                }
                onSlideChange={(swiper) => {
                    setIsEnd(swiper.isEnd);
                    setIsStart(swiper.isBeginning);
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    }
                }}
                modules={[Navigation]}
                spaceBetween={40}
                >
                    {data.map((item,index)=>(<SwiperSlide key={index}>
                        <CardRecomendedDetails item={item}></CardRecomendedDetails>
                    </SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    )
}

export default RecomendedAnime