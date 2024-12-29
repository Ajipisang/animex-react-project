import { PiThumbsUpFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { BiSolidConfused } from "react-icons/bi";
import { FaLaughSquint } from "react-icons/fa";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import ReviewsCard from "../../ui/details/reviewscard";

function Reviews({item}){
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(6);

    const handleClick=()=>{
        setActive(item.length);
        setIsOpen(true);
    
        if(active===item.length){
            setActive(6);
            setIsOpen(false);
        }
    }

    
    return(
        <div className="w-full min-h-full flex flex-col  items-start ">
            <div className="w-full h-full flex gap-5  flex-col lg:flex-wrap lg:flex-row">
              {item.slice(0,active).map((item,index)=>(<ReviewsCard key={index} item={item}></ReviewsCard>))}
            </div>
            <div onClick={handleClick} className="w-full cursor-pointer lg:w-1/2 items-center text-white text-xl capitalize rounded-lg flex h-[50px] bg-yellow-500 justify-center mt-5">
                <h1>{isOpen?"show less":"show more"}</h1>
            </div>
        </div>
    )
}

export default Reviews