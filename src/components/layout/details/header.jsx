import { IoIosHeart } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { PiRankingFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
function HeaderDetails() {
  const data = [
    {
      icon: <IoIosHeart className="text-red-600 w-full h-full"></IoIosHeart>,
      count: "12.4k",
    },
    {
      icon: <MdPeople className="text-amber-600 w-full h-full"></MdPeople>,
      count: "12.4k",
    },
    {
      icon: (
        <PiRankingFill className="text-purple-600 w-full h-full"></PiRankingFill>
      ),
      count: "12.4k",
    },
    {
      icon: (
        <BiSolidMoviePlay className="text-sky-600 w-full h-full"></BiSolidMoviePlay>
      ),
      count: "12.4k ",
    }
  ];
  return (
    <section className="w-full h-[300px] relative bgOverlay2  bg-black">
      <div className="w-full h-full blur-sm  overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/id/e/ef/Lycoris_Recoil_key_visual.jpg"
          className="w-full h-full object-cover"
        ></img>
      </div>

      <div className="w-full h-auto absolute flex flex-col items-center   top-1/2 z-30">
        <div className="w-[160px] h-[230px] rounded-lg shadow-lg bg-black   overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/e/ef/Lycoris_Recoil_key_visual.jpg"
            className="w-full h-full object-cover"
          ></img>
        </div>

        <div className="w-full flex flex-col items-center gap-1 px-2 text-center">
          <h1 className="mt-2 text-white text-2xl capitalize ">
            lycoris recoil
          </h1>

          <div className="flex gap-2 items-center mb-1">
            <FaStar className="text-yellow-500 text-sm"></FaStar>
            <h1 className="text-white text-md ">9.7 (1.2k+)</h1>
          </div>

          <div className="flex gap-2 items-center text-white opacity-50 text-sm">
            <h1>2022</h1>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <h1>Spring</h1>
          </div>

         
        </div>

        <div className="w-[250px] flex justify-between h-[60px] bg-[rgba(20,23,24,0.2)] rounded-lg shadow-xl p-2  mt-3">
          {data.map((item, index) => {
            return (
              <div className="w-[40px] items-center h-[full] justify-between flex flex-col">
                {item.icon}
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
