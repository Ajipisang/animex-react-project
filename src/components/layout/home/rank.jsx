import { FaRankingStar } from "react-icons/fa6";
import TopAnimeCard from "../../fragments/home/topanimecard";
import { useState,useEffect } from "react";
function Rank({topAnimes,topManga,topChar}){
    const [activeData, setActiveData] = useState("Anime");
    const [activePage, setActivePage] = useState(5);
    const [dataView, setDataView] = useState(topAnimes);
    useEffect(()=>{
        setDataView(topAnimes);
    },[topAnimes])
    const handleClick=()=>{
        setActivePage(activePage+5);
        if(activePage == 10){
            setActivePage(5);
        }
    }

    const data=[
        {
            title:"Anime",
            data:topAnimes
        },
        {
            title:"Character",
            data:topChar
        },
        {
            title:"Manga",
            data:topManga
        }
    ]
    const handleClickNav=(item,data)=>{
        setActiveData(item);
        setDataView(data);
    }   
    return(
        <div className="mt-5  px-5 flex flex-col gap-5">
            <div className="gap-2 flex items-center">
                <FaRankingStar className="text-3xl text-white"/>
                <h1 className="text-white text-2xl capitalize font-semibold">TOP <span className="text-amber-500 font-bold">10</span></h1>
            </div>

            <div className="w-full shadow-xl flex flex-col min-h-[400px] p-6 bg-purpleSemiDark rounded-xl">
                <div className="w-full flex gap-4">
                    {data.map((item,index)=>{
                        return(
                            <h1 onClick={()=>handleClickNav(item.title,item.data)} className={`text-white cursor-pointer text-lg font-semibold  ${activeData == item.title ? "border-b-2 border-b-amber-500":"border-b-2 border-b-transparent opacity-50"} transition-all duration-300 ease-in-out`}>{item.title}</h1>
                        )
                    })}
                   

                </div>

                <div className="w-full mt-5 flex lg:h-[600px] overflow-y-scroll flex-col gap-6">
                    {dataView.slice(0,10).map((item,index)=><TopAnimeCard key={item.mal_id} item={item} index={index}></TopAnimeCard>)}
                    

                </div>

               
            </div>
          
        </div>
    )
}

export default Rank