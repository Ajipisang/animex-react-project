import { useState } from "react";
import CharCard from "../../ui/details/charcard";
function Char({item}){
    const [active,setActive]=useState(6);

    const [isEnd, setIsEnd] = useState(false);
    const handleClick=()=>{
        setActive(item.length);
        setIsEnd(true);

        if(active===item.length){
            setActive(6);
            setIsEnd(false);
        }
    }
    
    return(
        <div className="w-full px-2 min-h-[300px] ">
            <div className="flex flex-wrap justify-center gap-2 gap-y-3">
             

                {item.slice(0,active).map((item,index)=>(<CharCard key={index} item={item}></CharCard>))}

            </div>

            <div onClick={handleClick} className="w-full mt-2 items-center text-white text-xl capitalize rounded-lg flex h-[50px] bg-yellow-500 justify-center">
                <h1>{isEnd?"show less":"show more"}</h1>
            </div>
        </div>
    )
}

export default Char