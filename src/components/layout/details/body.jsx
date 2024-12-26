import { TbListDetails } from "react-icons/tb";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { useState,useEffect } from "react";
import DetailsFrag from "../../fragments/details/detailsfrag";
import Reviews from "../../fragments/details/reviews";
import Overview from "../../fragments/details/overview";
function BodyDetails(){

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
        }
    ]

    const page=[
        {
            title:"Details",
            content:<DetailsFrag></DetailsFrag>
        },
        {
            title:"Overview",
            content:<Overview></Overview>
        },
        {
            title:"Reviews",
            content:<Reviews></Reviews>
        }
    ]
    return(
        <div className="flex w-full px-6 flex-col ">
            <div className="w-full capitalize text-sm  text-white flex justify-between">
                {data.map((item,index)=>{
                    return(
                        <div onClick={()=>{setActive(index)}} className={`flex gap-2 items-center ${active==index?"text-yellow-500 opacity-100":"text-white opacity-50 relative "} flex-col transision-all cursor-pointer relative duration-300`}>
                            <div className="flex gap-2">
                            {item.icon}
                            <h1>{item.title}</h1>
                        </div>

                        <div className={`w-full h-[1px] ${active==index?"bg-yellow-500 opacity-100":"hidden"} bg-yellow-500 absolute bottom-[-8px] transition-all duration-300 ease-in-out` }></div>
                    </div>
                    )
                })}
             
            </div>
            <div className="w-full h-[1px] bg-white mt-2 opacity-50"></div>

            <div className="w-full mt-2">
                {page[active].content}
            </div>
        </div>
    )
}

export default BodyDetails