import { indexOf } from "lodash";
import { useEffect } from "react";
import { RxCheck } from "react-icons/rx";
function FormatContent({formatData,setFormatData}){
    const dataSeason=[
        {
            title:"winter"
        },
        {
            title:"spring"
        },
        {
            title:"summer"
        },
        {
            title:"fall"
        }
    ] 


    const handleClickSeason = (title) => {
        if (formatData.includes(title)) {
            // Hapus title dari array
            setFormatData((prev) => prev.filter((item) => item !== title));
        } else {
            // Tambahkan title ke array
            setFormatData((prev) => [...prev, title]);
        }
    };
    

    return(
      <>
      <div className="flex flex-col gap-2">
       {dataSeason.map((item,index)=>{
        return(
             
        <div onClick={()=>handleClickSeason(item.title)} className="flex gap-2 items-center">
            <div className={`w-[18px] ${formatData.includes(item.title)? "border border-black bg-black":""}  h-[18px] flex items-center justify-center border-[2px] rounded-sm border-black/50 text-3xl transition-all duration-300 ease-in-out`}>
            <RxCheck  className={`${formatData.includes(item.title)? "":"hidden"} text-white `}></RxCheck>
            </div>
            <h1 className={`text-lg  ${formatData.includes(item.title)? "text-black":"text-black/50"}  `}>{item.title}</h1>
        </div>
        )
       })}
        </div>
      </>
    )
}

export default FormatContent