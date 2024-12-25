function SearchPlaceHolder({item}){
    return(
        <div className="w-full items-center h-[95px] flex gap-2 ">
        <div className="min-w-[80px] max-w-[80px] h-full bg-black overflow-hidden rounded-lg">
            <img src={item.images.jpg.image_url} className="w-full h-full object-cover"></img>
        </div>

        <div className="flex flex-col gap-1">
            <h1 className="text-black text-md">{item.title.length >20 ? item.title.substring(0,20)+"...": item.title}</h1>
            <span className={`"text-sm ${!item.year && "hidden"} opacity-50"`}>({item.year})</span>
           
        </div>

       
    </div>
    )
}

export default SearchPlaceHolder