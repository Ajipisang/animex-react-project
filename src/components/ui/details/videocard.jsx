function VideoCard({item}){
    return(
        <div className="w-[160px] flex flex-col gap-1 h-[170px] ">
        <div className="w-full min-h-[120px] bg-black overflow-hidden rounded-lg">
            <img src={item.images.jpg.image_url} className="w-full h-full object-cover"></img>
        </div>
        <h1 className="text-sm text-white text-opacity-50">{item.episode} </h1>
        <h className=" text-white text-[13px]">{item.title}</h>
    </div>
    )
}

export default VideoCard