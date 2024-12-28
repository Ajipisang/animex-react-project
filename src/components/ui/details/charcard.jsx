import { IoHeartSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useState,useEffect } from "react";
function CharCard({ item }) {
  const [person, setPerson] = useState([]);
  const handleCount = (count) => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count;
    }
    
  };

  useEffect(() => {

    if(item.voice_actors.length>0){
      const result=item.voice_actors.filter((item) => item.language==="Japanese")
      if(result.length>0){
        setPerson(result[0])
      }else{
        setPerson(item.voice_actors[0])
      }
    }
  }, [item.voice_actors]);


  
  return (
    <div key={item.character.mal_id} className="w-[160px] gap-1  flex flex-col h-full rounded-lg ">
      <div className="w-full relative h-[200px] rounded-lg overflow-hidden ">
        <img
          src={item.character.images.jpg.image_url}
          className="w-full h-full object-cover"
        ></img>
        <div className="absolute w-[70px] z-20 h-[30px] bg-[rgba(225,232,14,0.5)] shadow-lg top-2 left-2 flex gap-1 rounded-lg items-center justify-center font-semibold text-white">
          <IoHeartSharp className="w-[15px] h-[15px] text-red-600" />
          <h1 className="text-sm">{handleCount(item.favorites)}</h1>
        </div>

        <div className="h-full z-10 w-full bg-black opacity-20 absolute top-0"></div>

        <h1 className="text-white z-20 absolute bottom-1 left-1  text-sm">
          {item.character.name}
        </h1>
      </div>
      <h1>{item.role}</h1>


      

      <div className="w-full bg-slate-400 relative h-[200px] rounded-lg overflow-hidden ">
        <img
          src={person?.person?.images.jpg.image_url || "fallback-image-url.jpg"}
          className="w-full h-full object-cover"
        ></img>
        <div className="absolute w-uto z-20 h-[30px] bg-[rgba(225,232,14,0.3)] shadow-lg top-2 left-2 flex gap-1 rounded-lg items-center justify-center  text-white">
          <FaMicrophone className="w-[15px] h-[15px] text-white" />
          <h1 className="text-sm">{person?.language || "no data"}</h1>
        </div>

        <div className="h-full z-10 w-full bg-black opacity-20 absolute top-0"></div>

        <h1 className="text-white z-20 absolute bottom-1 left-1  text-sm">
          {person?.person?.name || "no data"}
        </h1>
      </div>

     
    </div>
  );
}

export default CharCard;
