import { MdMovieCreation } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { Md18UpRating } from "react-icons/md";
import { MdSource } from "react-icons/md";
import { BiSelection } from "react-icons/bi";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { useState } from "react";
function DetailsFrag({item}){
    const [isExpanded, setIsExpanded] = useState(false);
    const genre=["Action","Adventure","Drama"]
    const data=[
        {
            titles:"type",
            value:item.type,
            icon:<MdOutlineTypeSpecimen />

        },
        {
            titles:"status",
            value:item.status,
            icon:<GrStatusUnknown />
        },
        {
            titles:"rating",
            value:item.rating,
            icon:<Md18UpRating />
        },
        {
            titles:"studios",
            value: item.studios && item.studios.length > 1
            ? item.studios.map((studio, index) => index !== item.studios.length - 1 ? studio.name + ", " : studio.name)
            : item.studios[0]?.name, // Handle the case when there's only one studio
            icon:<MdMovieCreation />
        },
        {
            titles:"Source",
            value:item.source,
            icon:<MdSource />
        },
        {
            titles:"genres",
            value:item.genres && item.genres.length>1 ? item.genres.map((genre, index) => index !== item.genres.length - 1 ? genre.name + ", " : genre.name) : item.genres[0]?.name,
            icon:<BiSelection />
        },
        {
            titles:"duration",
            value:item.duration,
            icon:<BsFillClockFill />
        }
    ]
    return(
        <div className="flex flex-col gap-2 w-full h-auto ">
            <div className="flex flex-col w-full lg:w-3/4 pr-3">
                <h1 className=" capitalize text-white">synopsis</h1>
                <h1 className="text-sm text-[rgba(255,255,255,0.5)] mt-1 lg:text-[16px] leading-[20px]">{!isExpanded? item.synopsis.substring(0,400)+"...":item.synopsis} <span className="text-white cursor-pointer" onClick={()=>setIsExpanded(!isExpanded)}>{!isExpanded?" read more":"read less"}</span> </h1>
            </div>


            <div className="flex flex-col w-full ">
          
            <table >
                <tbody className="capitalize  ">
                    {data.map((data,index)=>{
                        return(
                            <tr>
                            <td className="w-[80px] lg:w-[30px] h-[30px] items-center flex gap-[5px] text-white inter text-md">
                           
                            <div className="flex items-center gap-2">
                            {data.icon}
                            {data.titles}
                            </div>
                            </td>
                            <td className="inter text-md] text-amber-300">{data.value}</td>
                            
                        </tr>
                        )
                    })}
                   
                </tbody>
            </table>

           <div className="flex flex-col mt-2 lg:mt-4">
            <h1 className="text-white text-xl capitalize">trailer</h1>
           {item.trailer.youtube_id==null ? <div className="w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-white">
            <h1 className="text-black text-xl capitalize">no trailer found </h1>

           </div> :<div className="w-full lg:w-3/4 h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
            <iframe width="100%" height="100%" src={item.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>}
           </div>
        
            </div>
        </div>
    )
}

export default DetailsFrag