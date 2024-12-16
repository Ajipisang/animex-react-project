import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
function TopAnimeCard(props){
    const {item,index}=props

    if(!item||item==null){
        return(
            <h1>loading</h1>
        )
    }
    const indexRank=(index)=>{
        if(index<9){
            return "0"+(index+1);
        }
        else{
            return (index+1);
        }
    }

    const formatNumber = (number) => {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + 'K'; // Membagi dengan 1000 dan menambahkan "K"
        }
        return number; // Jika kurang dari 1000, tampilkan angka seperti biasa
      };
      
    return(
        <div className="flex items-center w-full h-[100px]  justify-between ">
                        <h1 className={`text-white text-2xl ${index==0||index==1||index==2 ?"border-b-4  border-b-yellow-500 font-semibold":"font-thin"} `}>{indexRank(index)}</h1>

                       <div className="w-full flex justify-between h-full  gap-2 pl-3 ">
                        <div className="w-[110px] h-full rounded-lg overflow-hidden">
                        <img src={item.images.jpg.image_url}></img>
                        </div>

                        <div className="w-full h-full  flex flex-col justify-center gap-2">
                            <h1 className=" capitalize text-white text-[19px] font-thin">{item?.title?.length>30?item.title.slice(0,30)+"...":item?.title || item.name}</h1>
                            <div className="w-full  items-center flex gap-1">
                                <h1 className={`${item.year!=null?"":"hidden"} text-white px-2 py-1 bg-amber-600 rounded-lg text-sm  font-semibold`}>{item.year!=null?item.year:"?"}</h1>
                                <div className={`${item.score!=null?"":"hidden"} flex bg-green-700 rounded-lg text-sm px-2 py-1 text-white items-center gap-1 font-semibold`}>
                                    <FaStar className="text-amber-500 text-[13px]" />
                                    <h1>{item.score}</h1>
                                </div>

                                <div className="flex items-center text-sm gap-1 bg-purple-600 rounded-lg text-white px-2 py-1 font-semibold">
                                    <FaThumbsUp></FaThumbsUp>
                                    <h1>{formatNumber(item.favorites)}</h1>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
    )
}

export default TopAnimeCard