import { RiMenu3Fill } from "react-icons/ri";
import CardDiscover from "../../fragments/discover/animecard";
import { useState,useEffect } from "react";
function MainDiscover({anime}) {
    let pages=[];
    const [currPage, setCurrPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    for(let i=1;i<=Math.ceil(anime.length/postPerPage);i++){
        pages.push(i)
    }
    const lastPostIndex = currPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    return(
        <div className="flex mb-[100px] flex-col mt-5 gap-2">
            <div className="flex items-center gap-2">
                <div className="w-full h-[3px] bg-white"></div>
                <RiMenu3Fill className="w-[24px] h-[24px] text-white"/>
            </div>

            <div className="w-full flex px-2 justify-between flex-wrap gap-2 ">

              {anime.slice(firstPostIndex,lastPostIndex).map((item,index)=>{
                return(
                    <CardDiscover key={index} item={item}></CardDiscover>
                )
              })}
            </div>
            <div className="flex justify-center mt-3 gap-2">
                {pages.map((item,index)=>{
                    return(
                        <div className={`w-[40px] h-[40px] font-semibold rounded-lg flex items-center justify-center  ${currPage===item ? "bg-yellow-600 text-black" : "bg-black/50 text-white"} `}>
                             <h1 onClick={()=>{setCurrPage(item)}} key={index}>{item}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainDiscover