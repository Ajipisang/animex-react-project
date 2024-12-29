import { IoHeartSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useState,useEffect } from "react";

function CharCard({ item }) {
  const [img, setImg] = useState(item.character.images.jpg.image_url);
  const [name, setName] = useState(item.character.name);
  const [isHover, setIsHover] = useState(false);
  const [person, setPerson] = useState([]);
  const handleCount = (count) => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count;
    }
  };
  const [detail, setDetail] = useState(handleCount(item.favorites));
 

  const handleMouseEnter=()=>{
    setImg(person?.person?.images.jpg.image_url)
    setName(person?.person?.name)
    setIsHover(true)
    setDetail(person?.language)
  }

  const handleMouseLeave=()=>{
    setImg(item.character.images.jpg.image_url);
    setName(item.character.name);
    setIsHover(false)
    setDetail(handleCount(item.favorites))
  }

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
    <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    key={item.character.mal_id} className="w-[160px] lg:w-[250px]  overflow-hidden gap-1  flex flex-col h-full rounded-lg ">
      <div className="w-full relative h-[200px] lg:h-[350px] cursor-pointer rounded-lg overflow-hidden ">
        <img
          src={img}
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            isHover ? "scale-105" : ""
          }`}
        ></img>
        <div className="absolute w-auto px-2 z-20 h-[30px] bg-[rgba(225,232,14,0.5)] shadow-lg top-2 left-2 flex gap-1 rounded-lg items-center justify-center font-semibold text-white">
          <span>{isHover && <MdKeyboardVoice className="w-[15px] h-[15px] text-white" />}</span>
          <IoHeartSharp className={`w-[15px] ${isHover && "hidden"} h-[15px] text-red-600`} />
          <h1 className="text-sm">{detail}</h1>
        </div>

        <div className="h-full z-10 w-full bg-black opacity-20 absolute top-0"></div>

        <h1 className="text-white z-20 absolute bottom-1 left-1  text-sm">
          {name}
        </h1>
      </div>
      <h1>{item.role}</h1>


      

      <div className="w-full lg:hidden bg-slate-400 relative h-[200px] rounded-lg overflow-hidden ">
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
