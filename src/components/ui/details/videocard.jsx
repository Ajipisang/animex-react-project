function VideoCard({item}){
    return(
        <div className="w-[160px] lg:w-[300px] flex flex-col mb-2 h-[170px] lg:h-[250px] ">
        <div className="w-full h-full bg-black overflow-hidden rounded-lg">
            <img src={item.images.jpg.image_url} className="w-full h-full object-cover"></img>
        </div>
        <h1 className="text-sm text-white text-opacity-50">{item.episode} </h1>
        <h1 className=" text-white text-[13px]">{item.title}</h1>
    </div>
    )
}

export default VideoCard