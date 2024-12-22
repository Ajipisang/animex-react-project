function Loading(){
    return(
        <div className="w-full bg-purpleSemiDark h-screen flex flex-col gap-2 items-center justify-center">
            <div className="flex items-start text-3xl font-semibold text-white gap-5">
                <h1>hang in there</h1>
                <span className="loading loading-dots loading-lg"></span>
            </div>
            <img src="https://media1.tenor.com/m/LiqhUEDmWcAAAAAC/cute.gif" alt="Funny GIF" width="300"></img>
        </div>
    )
}

export default Loading