import { RxCheck } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState,useEffect } from "react";
function GenreContent({genres,setGenresIndex,genresIndex}){
    const [activeIndex,setActiveIndex]=useState(5);
    const [isEnd,setIsEnd]=useState(false);
    const handleClickSeason = (title) => {
        if (genresIndex.includes(title)) {
            // Hapus title dari array
            setGenresIndex((prev) => prev.filter((item) => item !== title));
        } else {
            // Tambahkan title ke array
            setGenresIndex((prev) => [...prev, title]);
        }
    };

    const handleClick=()=>{
        setActiveIndex(genres.length);
        setIsEnd(true);
        
        if(activeIndex == genres.length){
            setActiveIndex(5);
            setIsEnd(false);
        }
    }
    return(
     <>
        <div className="flex-col ">
        <div className="flex flex-col gap-2">
            <div className="w-full h-[40px] mb-3 mt-2">
                <input type="text" placeholder="ex : action" className="w-full px-2 h-full bg-transparent rounded-lg outline-none text-black border border-black/50"></input>
            </div>
            {genres.slice(0,activeIndex).map((item,index)=>{
             return(
                  
             <div onClick={()=>handleClickSeason(item.name)} className="flex gap-2 items-center">
                 <div className={`w-[18px] ${genresIndex.includes(item.name)? "border border-black bg-black":""}  h-[18px] flex items-center justify-center border-[2px] rounded-sm border-black/50 text-3xl transition-all duration-300 ease-in-out`}>
                 <RxCheck  className={`${genresIndex.includes(item.name)? "":"hidden"} text-white `}></RxCheck>
                 </div>
                 <h1 className={`text-lg  ${genresIndex.includes(item.name)? "text-black":"text-black/50"}  `}>{item.name}</h1>
             </div>
             )
            })} 
            
            
            
            </div>

            <div onClick={handleClick} className="flex items-center text-yellow-600 px-2 gap-1">
                <h1 className="">{isEnd ? "less" : "more"}</h1>
                < IoIosArrowDown className={`mt-1 ${isEnd ? "rotate-180":""}`}></IoIosArrowDown>
            </div>
        
        </div>
            
          
     </>
    )
}

export default GenreContent