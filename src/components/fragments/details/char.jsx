import { useState } from "react";
import CharCard from "../../ui/details/charcard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Navigation } from "swiper/modules";
function Char({item}){
    const [active,setActive]=useState(6);
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(true);
    const handleClick=()=>{
        setActive(item.length);
        setIsEnd(true);

        if(active===item.length){
            setActive(6);
            setIsEnd(false);
        }
    }
    
    return(
        <div className="w-full px-1 min-h-[300px] ">
            <div className="lg:flex gap-6 gap-y-6  justify-start flex-wrap hidden">
            {item.map((item,index)=>(
                    
                        <CharCard key={index} item={item}></CharCard>
                    
                ))}
            </div>
            <div className="flex lg:hidden justify-between gap-2 gap-y-3">
                <Swiper
                slidesPerView={2}
                spaceBetween={20}
                className="relative "
                navigation={{
                    prevEl: "#prevButtonChar",
                    nextEl: "#nextButtonChar",
                }}
                onSlideChange={(swiper) => {
                    setIsEnd(swiper.isEnd);
                    setIsStart(swiper.isBeginning);
                }}
                breakpoints={
                    {
                        640: {

                        },
                        1024: {
                          slidesPerView: 6,
                          spaceBetween: 20  
                        },
                    }
                }
                modules={[Navigation]}
                >
                     <div  className="w-full absolute  flex justify-between h-[50px]  top-1/2 z-20">
                     <div id="prevButtonChar" className={`w-[40px] ${isStart && "translate-x-[-40px] opacity-0"} flex items-center justify-center h-full bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out`}>
                        <MdOutlineArrowBackIos  className="w-[20px] h-[20px] text-white"/>
                     </div>

                     <div id="nextButtonChar" className={`w-[40px] ${isEnd && "translate-x-[40px] opacity-0"} flex items-center justify-center h-full bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out`}>
                        <MdOutlineArrowForwardIos  className="w-[20px] h-[20px] text-white"/>
                     </div>
                </div>
                {item.map((item,index)=>(
                    <SwiperSlide>
                        <CharCard key={index} item={item}></CharCard>
                    </SwiperSlide>
                ))}
               
                </Swiper>
            </div>

            {/* <div onClick={handleClick} className="w-full mt-2 items-center text-white text-xl capitalize rounded-lg flex h-[50px] bg-yellow-500 justify-center">
                <h1>{isEnd?"show less":"show more"}</h1>
            </div> */}
        </div>
    )
}

export default Char