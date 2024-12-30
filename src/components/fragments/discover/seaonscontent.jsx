import { indexOf } from "lodash";
import { useEffect } from "react";
import { RxCheck } from "react-icons/rx";
function SeasonContent({seasonData,setSeasonData}){
    const dataSeason=[
        {
            title:"TV"
        },
        {
            title:"ova"
        },
        {
            title:"special"
        },
        {
            title:"ona"
        },
        {
            title:"music"
        }
    ] 

    const handleClickSeason = (title) => {
        if (seasonData.includes(title)) {
            // Hapus title dari array
            setSeasonData((prev) => prev.filter((item) => item !== title));
        } else {
            // Tambahkan title ke array
            setSeasonData((prev) => [...prev, title]);
        }
    };
    

    return(
      <>
      <div className="flex flex-col gap-2">
       {dataSeason.map((item,index)=>{
        return(
             
        <div onClick={()=>handleClickSeason(item.title)} className="flex gap-2 items-center">
            <div className={`w-[18px] ${seasonData.includes(item.title)? "border border-black bg-black":""}  h-[18px] flex items-center justify-center border-[2px] rounded-sm border-black/50 text-3xl transition-all duration-300 ease-in-out`}>
            <RxCheck  className={`${seasonData.includes(item.title)? "":"hidden"} text-white `}></RxCheck>
            </div>
            <h1 className={`text-lg  ${seasonData.includes(item.title)? "text-black":"text-black/50"}  `}>{item.title}</h1>
        </div>
        )
       })}
        </div>
      </>
    )
}

export default SeasonContent