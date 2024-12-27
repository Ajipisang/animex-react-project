import { TbListDetails } from "react-icons/tb";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { useState,useEffect } from "react";
import DetailsFrag from "../../fragments/details/detailsfrag";
import Reviews from "../../fragments/details/reviews";
import Overview from "../../fragments/details/overview";
import { FaPerson } from "react-icons/fa6";
import Char from "../../fragments/details/char";
import { Swiper, SwiperSlide } from "swiper/react";
import Episode from "../../fragments/details/episode";
import { TbPlayerPlayFilled } from "react-icons/tb";
// Import Swiper styles
import "swiper/css";

function BodyDetails({item,char,reviews,stat,video}){

    const [active,setActive]=useState(0);
    const data=[
        {
            icon: <TbListDetails className="w-[20px] h-[20px]" />,
            title:"Details"
        },
        {
            icon:<FaChartBar className="w-[20px] h-[20px]"/>,
            title:"Overview"
        },
        {
            icon: <BiSolidCommentDetail className="w-[20px] h-[20px]" />,
            title:"Reviews"
        },
        {
            icon: <FaPerson className="w-[20px] h-[20px]" />,
            title:"Cast"
        },
        {
            icon: <TbPlayerPlayFilled className="w-[20px] h-[20px]" />,
            title:"Episodes"
        }
    ]

    const page=[
        {
            title:"Details",
            content:<DetailsFrag item={item}></DetailsFrag>
        },
        {
            title:"Overview",
            content:<Overview item={stat}></Overview>
        },
        {
            title:"Reviews",
            content:<Reviews item={reviews}></Reviews>
        },
        {
            title:"Cast",
            content:<Char item={char}></Char>
        },
        {
            title:"Cast",
            content:<Episode item={video} ></Episode>
        },
        
    ]
    return(
        <div className="flex w-full relative px-2 flex-col ">
            <div className="w-full  capitalize text-sm  text-white flex justify-between">
                <Swiper
                
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={false}
                vor
                // loopFillGroupWithBlank={true}
                // pagination={{
                //   el: ".swiper-pagination",
                //   clickable: true,
                // }}
                // navigation={{
                //   nextEl: ".swiper-button-next",
                //   prevEl: ".swiper-button-prev",
                // }}
                // modules={[  ]}
                className="mySwiper relative"
                >
                   
               
                {data.map((item,index)=>{
                    return(
                        <SwiperSlide key={index} className="relative">
                    <div onClick={()=>{setActive(index)}} className={`flex gap-2 items-center ${active==index?"text-yellow-500 opacity-100":"text-white opacity-50 relative "} flex-col transision-all h-[30px] cursor-pointer relative duration-300 overflow-visible`}>
                            <div className="flex gap-2">
                            {item.icon}
                            <h1>{item.title}</h1>
                             </div>

                           

                       
                    </div>
                    <div className={`w-full h-[2px] ${active==index?"bg-yellow-500 opacity-100":""}  absolute bottom-[-2px] transition-all duration-300 ease-in-out` }></div>
                    </SwiperSlide>
                    )
                })}
                 </Swiper>
             
            </div>
            <div className="w-full h-[1px] bg-white mt-2 opacity-50"></div>

            <div className="w-full mt-2">
                {page[active].content}
            </div>
        </div>
    )
}

export default BodyDetails