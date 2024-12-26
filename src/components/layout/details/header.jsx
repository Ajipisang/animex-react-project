function HeaderDetails(){
    return(
    
        <section className="w-full h-[300px] relative bgOverlay2  bg-black">
            <div className="w-full h-full blur-sm  overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/id/e/ef/Lycoris_Recoil_key_visual.jpg" className="w-full h-full object-cover"></img>
            </div>

            <div className="w-full h-full absolute flex justify-center border border-red-600  top-1/2 z-30">
                <div className="w-[160px] h-[200px] rounded-lg shadow-lg bg-black   overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/id/e/ef/Lycoris_Recoil_key_visual.jpg" className="w-full h-full object-cover"></img>
                </div>
            </div>

          
        </section>
    )
}

export default HeaderDetails