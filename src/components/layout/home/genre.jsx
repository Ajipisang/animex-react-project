import CardGenres from "../../fragments/home/cardgenres"
import { useState } from "react"
function Genre(props){
    const {genres}=props;
    const [show, setShow] = useState(10);
    

    const handleClick=()=>{
        setShow(show+10);

        if(show >= genres.length){
            setShow(10);
        }
    }
  
    return(
        <section className="mt-9 flex flex-col gap-4 z-20 px-5  w-full">
            <h1 className="text-white text-2xl capitalize font-semibold">genres</h1>
            <div className="w-full transition-all duration-300 ease-in-out  shadow-lg p-5 bg-purpleSemiDark rounded-lg h-full" >

                <div className="flex justify-start gap-y-4 flex-wrap gap-2">
                    {genres.slice(0,show).map((item,index)=><CardGenres key={item.mal_id} item={item} index={index}></CardGenres>)}
                </div>

                <div onClick={handleClick} className="w-full h-[40px] flex bg-amber-600 rounded-lg mt-6">
                    <h1 className="m-auto text-white text-xl">{show < genres.length ? "Show More" : "Show Less"}</h1>

                </div>
            </div>
            
            
        </section>
    )
}

export default Genre