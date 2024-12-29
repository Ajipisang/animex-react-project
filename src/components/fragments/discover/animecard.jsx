function CardDiscover({item}){
    return(
        <div className="w-[160px]  rounded-lg h-[230px] relative bg-black overflow-hidden"> 
        <img src={item.images.jpg.image_url} className="w-full h-full opacity-70 object-cover">
        </img>
        <div className="absolute bottom-2 left-2 flex flex-col w-full">
            <h1 className=" text-slate-100 font-semibold text-[17px] ">{item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}</h1>
            <div className="flex text-sm leading-3 items-center text-white/70 gap-2">
                <h1>{item.year || "N/A"}</h1>
                <div className="w-[5px]  h-[5px] rounded-full bg-white/90"></div>
                <h1>{item.season || "N/A"}</h1>
            </div>
        </div>
    </div>
    )
}

export default CardDiscover