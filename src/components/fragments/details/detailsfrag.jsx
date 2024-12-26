import { MdMovieCreation } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { Md18UpRating } from "react-icons/md";
import { MdSource } from "react-icons/md";
import { BiSelection } from "react-icons/bi";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineTypeSpecimen } from "react-icons/md";
function DetailsFrag(){
    const genre=["Action","Adventure","Drama"]
    const data=[
        {
            titles:"type",
            value:"Tv",
            icon:<MdOutlineTypeSpecimen />

        },
        {
            titles:"status",
            value:"Finished Airing",
            icon:<GrStatusUnknown />
        },
        {
            titles:"rating",
            value:"R - 17+ (violence & profanity)",
            icon:<Md18UpRating />
        },
        {
            titles:"studios",
            value:"Sunrise",
            icon:<MdMovieCreation />
        },
        {
            titles:"Source",
            value:"Manga",
            icon:<MdSource />
        },
        {
            titles:"genres",
            value:genre.map((item,index)=>index!==genre.length-1?item+", ":item),
            icon:<BiSelection />
        },
        {
            titles:"duration",
            value:"1 hr 55 min",
            icon:<BsFillClockFill />
        }
    ]
    return(
        <div className="flex flex-col gap-2 w-full h-auto ">
            <div className="flex flex-col w-full pr-3">
                <h1 className=" capitalize text-white">synopsis</h1>
                <h1 className="text-sm text-[rgba(255,255,255,0.5)] mt-1 leading-[20px]">"Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, .." <span className="text-white">read more</span> </h1>
            </div>

            <div className="w-full h-[.5px] mt-2 bg-white opacity-50"></div>

            <div className="flex flex-col w-full ">
          
            <table >
                <tbody className="capitalize ">
                    {data.map((item,index)=>{
                        return(
                            <tr>
                            <td className="w-[80px] h-[30px] items-center flex gap-1 text-white inter text-md">
                           
                            {item.icon}
                            {item.titles}
                            </td>
                            <td className="inter text-md] text-amber-300">{item.value}</td>
                            
                        </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        
            </div>
        </div>
    )
}

export default DetailsFrag