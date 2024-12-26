import { IoHeartSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
function CharCard({item}){
    const handleCount = (count) => {
        if (count > 1000) {
          return (count / 1000).toFixed(1) + "k";
        } else {
          return count;
        }
    }
    return(
          <div className="w-[160px]  flex flex-col h-full rounded-lg ">
                            <div className="w-full relative h-[200px] rounded-lg overflow-hidden ">
                                <img src={item.character.images.jpg.image_url} className="w-full h-full object-cover"></img>
                                <div className="absolute w-[70px] z-20 h-[30px] bg-[rgba(225,232,14,0.5)] shadow-lg top-2 left-2 flex gap-1 rounded-lg items-center justify-center font-semibold text-white">
                                    <IoHeartSharp  className="w-[15px] h-[15px] text-red-600"/>
                                    <h1 className="text-sm">{handleCount(item.favorites)}</h1>
                                </div>
        
                                <div className="h-full z-10 w-full bg-black opacity-20 absolute top-0"></div>
        
                              
                     
                                    <h1 className="text-white z-20 absolute bottom-1 left-1  text-sm">{item.character.name}</h1>
                             
                            </div>
        
                            <h1 className="text-white px-1 text-lg opacity-70 font-thin">{item.role}</h1>
                            
                        </div>
        
                        
    )
}

export default CharCard