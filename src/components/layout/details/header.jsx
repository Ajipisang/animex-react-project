import { IoIosHeart } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { PiRankingFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
function HeaderDetails({item}) {

    function handleScore(score) {
        if(score >1000000){
            return (score / 1000000).toFixed(1) + "M+";
        }
        if(score >100000){
            return (score / 1000).toFixed(1) + "k+";
        }
        if(score >10000){
            return (score / 1000).toFixed(1) + "K+";
        } 
        if (score > 1000) {
          return (score / 1000).toFixed(1) + "K+";
        } 
        
       
        return score;
      }
  const data = [
    {
      icon: <IoIosHeart className="text-red-600 w-full h-full"></IoIosHeart>,
      count: handleScore(item.favorites),
      titles: "Favorites",
    },
    {
      icon: <MdPeople className="text-amber-600 w-full h-full"></MdPeople>,
      count: handleScore(item.members),
      titles: "Members",
    },
    {
      icon: (
        <PiRankingFill className="text-purple-600 w-full h-full"></PiRankingFill>
      ),
      count: item.rank,
      titles: "Rank",
    },
    {
      icon: (
        <BiSolidMoviePlay className="text-sky-600 w-full h-full"></BiSolidMoviePlay>
      ),
      count: handleScore(item.episodes) ,
      titles: "Eps",
    }
  ];

  
  return (
    <section className="w-full h-[300px] relative bgOverlay2  bg-black">
      <div className="w-full h-full blur-sm  overflow-hidden">
        <img
          src={item.images.jpg.large_image_url}
          className="w-full h-full object-cover"
        ></img>
      </div>

      <div className="w-full h-auto absolute flex flex-col items-center   top-[100px] z-30">
        <div className="w-[160px] h-[230px] rounded-lg shadow-lg bg-black   overflow-hidden">
          <img
            src={item.images.jpg.image_url}
            className="w-full h-full object-cover"
          ></img>
        </div>

        <div className="w-full flex flex-col items-center gap-1 px-2 text-center">
          <h1 className="mt-2 text-white text-2xl capitalize ">
            {item.title}
          </h1>

          <div className="flex gap-1 items-center mb-1">
            <FaStar className="text-yellow-500 text-sm"></FaStar>
            <div className="flex gap-1">
            <h1 className="text-white text-md ">{item.score} </h1>
            <div className="flex gap-1 items-center opacity-50">
                (
                <GoPersonFill className="text-white text-sm"></GoPersonFill>
                <h1 className="text-white text-sm">{handleScore(item.scored_by)}</h1>
                 )
            </div>
            </div>
          
          </div>

          <div className="flex gap-2 items-center text-white opacity-50 text-sm">
            <h1>{item.year}</h1>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <h1>{item.season}</h1>
          </div>

         
        </div>

        <div className="w-[330px]  flex justify-between h-[80px] bg-[rgba(20,23,24,0.2)] rounded-lg shadow-xl p-2  mt-3">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-auto items-center h-[full] justify-between flex flex-col">
                {item.icon}
                <h1 className="text-[11px] opacity-75 text-white">{item.titles}</h1>
                <h1 className="text-sm text-white">{item.count}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeaderDetails;
