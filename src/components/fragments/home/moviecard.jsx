import { FcLike } from "react-icons/fc";
function MovieCard({item,isHide}){
    return(
        <div className="w-[160px] relative h-auto flex flex-col gap-2 overflow-hidden rounded-lg ">
            <div className={`w-[70px] ${isHide && "hidden"} shadow-lg h-[30px] absolute top-0 right-0 text-white bg-slate-800 flex items-center justify-center gap-3 text-sm`}>
                <FcLike />
                <h1>{item.favorites}</h1>
            </div>
                    <div className="w-full h-[220px] rounded-lg overflow-hidden">
                    <img src={item.images.jpg.image_url} className="w-full h-full object-cover"></img>
                    </div>

                    <div className="flex flex-col ">
                        <h1 className="text-white text-lg">{item.title.length > 18 ? item.title.slice(0, 16) + "..." : item.title}</h1>
                        <h1 className="text-white text-sm opacity-50">{item.year ? item.year : ""}</h1>
                    </div>
                    <div className={`flex ${isHide && "hidden"} flex-wrap gap-1`}>
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