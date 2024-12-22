import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
function MovieCard({item,isHide}){

    function score(score){
        if(score>1000){
            return (score/1000).toFixed(1) + 'K';
        }

        return score
    }
    return(
        <div className="w-[160px] relative h-auto flex flex-col gap-2 overflow-hidden rounded-lg ">
            <div className={`w-[60px] ${isHide && "hidden"} shadow-lg h-[30px] absolute top-0 right-0 text-white bg-slate-800 flex items-center justify-center gap-1 text-sm`}>
                <FcLike />
                <h1>{score(item.favorites)}</h1>
            </div>

            <div className={`w-[60px] ${item.score ==null && "hidden"} h-[25px] bg-gradient-to-r from-purple-500 to-pink-400 rounded-[5px] flex gap-2 items-center text-sm justify-center shadow-lg text-white   absolute top-1 left-1`}>
            <FaStar />
            <h1>{item.score}</h1>

            </div>
                    <div className="w-full h-[220px] rounded-lg overflow-hidden">
                    <img src={item.images.jpg.image_url} className="w-full h-full object-cover"></img>
                    </div>

                    <div className="flex flex-col ">
                        <h1 className="text-white text-lg">{item.title.length > 18 ? item.title.slice(0, 16) + "..." : item.title}</h1>
                        <h1 className="text-white text-sm opacity-50">{item.year ? item.year : ""}</h1>
                    </div>
                    <div className={`flex ${isHide && "hidden"} hidden flex-wrap gap-1`}>
                        {item.genres.slice(0,2).map((item,index)=>{
                            return(
                                <h1 className="bg-slate-600 px-2 py-1 rounded-lg text-white text-sm capitalize">{item.name}</h1>
                            )
                        })}
                    
                    </div>
                </div>
    )
}

export default MovieCard