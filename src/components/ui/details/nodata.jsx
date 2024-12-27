function NoData({img}) {
    return(
        <div className="flex items-center flex-col  w-full min-h-[380px]">
            <img src={img} className="w-[300px] h-[300px] object-cover" alt="" />
            <h1 className="text-white poppins capitalize text-xl font-semibold">oops.. no data found :(</h1>
        </div>
    )
}

export default NoData