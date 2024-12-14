import { GoPlus } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BoxReveal from "../../ui/magic ui/box";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function Header(props){
    const {topAnime}=props
    const [isFirst,setIsFirst]=useState(false)
    const [isLast,setIsLast]=useState(false)
   
    return(
        <>
        <Swiper  
        navigation={{
            prevEl: '#prevButton', 
            nextEl: '#nextButton', 
        }}
        modules={[Navigation]} 
        onSlideChange={(swiper) => {
            
            setIsFirst(swiper.isBeginning);
            setIsLast(swiper.isEnd);
        }}
        className="mySwiper relative">
            <div className="w-full h-full flex justify-between absolute top-1/2 left-0 z-10 ">
                <span id="prevButton"><IoIosArrowBack  className={`w-[30px] ${isFirst ? "opacity-0 translate-x-[-30px]" : "opacity-100"} transition-all ease-in-out duration-300 h-[30px] text-white z-20`}/></span>
                <span id="nextButton"><IoIosArrowForward className={`w-[30px] ${isLast ? "opacity-0 translate-x-[-30px]" : "opacity-100"} transition-all ease-in-out duration-300 h-[30px] text-white z-20`}/></span>
            </div>
            {topAnime.slice(0,4).map((item,index)=>{
                return(
                    <SwiperSlide key={index}>
                    <section className="w-full text-white flex flex-col justify-end items-center h-[450px] bg-header relative" style={{ 
                    background: `url(${item.images.jpg.large_image_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  >
                   
                  <div className="w-[350px]  h-auto gap-2 z-30   flex flex-col justify-between">
                 
                    <h1 className="text-2xl font-semibold">{item.title} ({item.year})</h1>
                    <div  className="w-full text-white capitalize font-thin  text-[17px] flex justify-between">
                        {item.genres.map((item,index)=>{
                            return(
                                <h1 key={index}>{item.name}</h1>
                            )
                        })}
                      
                        
                    </div>
        
                    <div className="w-full  flex px-6 justify-between items-center h-full ">
                        <div className="flex items-center text-sm flex-col text-white gap-2">
                            <GoPlus className="w-[30px] h-[30px]"/>
                            <h1>my list</h1>
                        </div>
        
                         <button className="flex w-1/2 h-3/4 items-center  flex-col text-[#E5E5E5] text-lg capitalize bg-purpleSemiDark rounded-[20px] ">
                            <h1 className="m-auto">play</h1>
                        </button>
        
                         <div className="flex items-center text-sm flex-col text-white gap-2">
                            <IoMdInformationCircleOutline className="w-[30px] h-[30px]"/>
                            <h1>info</h1>
                        </div>
                    </div>
                  </div>
                </section>
        
                    </SwiperSlide>
                )
            })}
         

            
        </Swiper>
        
        </>
      
    )
}

export default Header