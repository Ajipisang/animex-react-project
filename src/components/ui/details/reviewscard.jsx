import { FaRegThumbsUp } from "react-icons/fa6";
import { BsCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { PiThumbsUpFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { BiSolidConfused } from "react-icons/bi";
import { FaLaughSquint } from "react-icons/fa";
import { FaLaugh } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6"
function ReviewsCard({ item }) {
    function yearsAgo(dateString) {
            const date = new Date(dateString); // Konversi string ke objek Date
            const options = { day: '2-digit', month: 'long', year: 'numeric' }; // Opsi format
             return date.toLocaleDateString('en-GB', options); // Formatkan tanggal
        }
        const [isOpen, setIsOpen] = useState(false);
        
        const data=[
            {
                icons:  <PiThumbsUpFill  className="w-[14px] h-[14px] text-blue-600" />,
                value: handleCount(item.reactions.nice),
                tooltip: "Like"
            },
            {
                icons:   <FaHeart   className="w-[14px] h-[14px] text-red-500" />,
                value: item.reactions.love_it,
                tooltip: "Love"
            },
            {
                icons: <BiSolidConfused  className="w-[14px] h-[14px] text-yellow-500" />,
                value: item.reactions.confusing,
                tooltip: "Confused"
            },
            {
                icons:  <FaLaughSquint className="w-[14px] h-[14px] text-yellow-500" />,
                value: item.reactions.funny,
                tooltip: "funny"
            },
            {
                icons:   <FaPencilAlt  className="w-[14px] h-[14px] text-slate-300" />,
                value: item.reactions.well_written,
                tooltip: "well writen"
            },
            
        ]
        function handleCount(count){
            if (count > 1000) {
              return (count / 1000).toFixed(1) + "k";
            } else {
              return count;
            }
        }

    return(
         <div className="w-full h-auto p-2 py-3 flex flex-col gap-3 bg-purpleLight rounded-lg shadow-xl">
                            {/* pp dan username */}
                            <div className="flex w-full items-center justify-between">
                               <div className="flex items-center gap-2">
                                <div className="w-[50px] h-[50px] bg-black overflow-hidden rounded-full">
                                        <img src={item.user.images.jpg.image_url} className="w-full h-full object-cover"></img>
                                    </div>
        
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-1 items-center">
                                            <h1 className=" text-md text-white capitalize">{item.user.username}</h1>
                                            <div className="flex items-center gap-1">
                                                (<FaStar  className="w-[14px] h-[14px] text-yellow-500"/>
                                                <h1 className="text-sm text-white">{item.score}</h1>)
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className={`flex gap-1 items-center text-[12px] ${item.tags[0]=="Recommended" ? "bg-green-600": "bg-yellow-600"}  text-white px-1 rounded-[5px] capitalize `}>
                                                <h1>{item.tags[0]}</h1>
                                               
                                                <span  className="w-[10px] h-[10px]">{item.tags[0]=="Recommended" ? <FaCheck /> : <FaQuestion />}</span>
                                            </div>
        
                                            <div className={`flex gap-1 items-center text-[12px] ${item.is_spoiler ? "bg-red-600" : "bg-green-600"} text-white px-1 rounded-[5px] capitalize `}>
                                                <h1>{item.is_spoiler ? "spoiler alert" : "no spoiler"}</h1>
                                                <span className="w-[10px] h-[10px]">{item.is_spoiler ? <TbAlertCircle /> : <BsCheck />}</span>
                                                
                                            </div>
                                        </div>
                                    </div>
        
                               </div>
                               <HiOutlineDotsVertical  className="w-[20px] h-[20px] text-white"/>
        
                            </div>
        
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm leading-5 text-[rgba(255,255,255,0.6)]">{!isOpen  ? item.review.substring(0,200)+"...": item.review} <span onClick={() => setIsOpen(!isOpen)} className="text-white">{isOpen ? "less" : "more"}</span></h1>
                                <div className="flex w-full items-center justify-between ">
                                  <div className="w-3/4 flex flex-wrap gap-2 flex-1">
                                  {data.map((item,index)=>{
                                        return(
                                            <div data-tip={item.tooltip} className="flex tooltip tooltip-bottom gap-1 mt-2 items-center px-2 bg-[rgba(193,173,23,0.5)] rounded-[5px]">
                                                {item.icons}
                                                <h1 className="text-white text-sm">{item.value}</h1>
                                            </div>
                                        )
                                    })}
                                  </div>
        
                                   <h1 className="text-[12px] text-white">({yearsAgo(item.date) })</h1>
                              
                                </div>
                            </div>
                        </div>
    )
}

export default ReviewsCard