import { MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
function CardRecomendedDetails({item}){
    return(
        <div  className="w-[150px] lg:w-[200px] flex flex-col gap-1 h-full rounded-lg ">
            <a href={`/details/${item.entry.mal_id}`}  className="w-full h-[200px] lg:h-[300px]  rounded-lg overflow-hidden relative">
                <img src={item.entry.images.jpg.image_url} className="w-full h-full object-cover"></img>
                <div data-tipe="votes" className="w-auto px-2 py-1 flex items-center gap-1 rounded-sm bg-yellow-600 tooltip tooltip-bottom text-white text-sm absolute top-2 left-2 ">
                <MdHowToVote />
                <h1>{item.votes}</h1>
                </div>
            </a>
            

            <h1 className="text-sm lg:text-lg text-white">{item.entry.title.length > 30 ? item.entry.title.slice(0, 30) + "..." : item.entry.title}</h1>
        </div>
    )
}

export default CardRecomendedDetails