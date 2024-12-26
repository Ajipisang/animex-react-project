import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import img1 from "../../../../public/img/fb.png";
import img2 from "../../../../public/img/ig.png";
import img3 from "../../../../public/img/reddit.png";
const icon = [
  {
    icon: img3,
  },
  {
    icon: img2,
  },
  {
    icon: img1,
  },
];
function Footer() {
  return (
    <section className="flex flex-col w-full lg:px-[120px] -z-10 h-full bg-purpleSemiDark pb-[100px] lg:pb-[50px] gap-3">
      <section className=" lg:pb-8 text-center  items-center py-6 lg:flex-row lg:justify-between  flex flex-col gap-2 ">
        <div className="flex  flex-col items-center lg:items-start lg:text-start max-w-[300px] gap-2">
          <h1 className="text-white text-3xl">AnimeX.</h1>
          <div className="w-[90px] h-[2px] bg-white"></div>
          <h1 className="text-white opacity-75 lg:text-sm">
            {" "}
            This website uses the <strong>
              Unofficial MyAnimeList API
            </strong>{" "}
            for retrieving anime data.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 mt-3">
            {icon.map((item) => {
              return (
                <>
                  <div className="w-[50px] h-[40px] cursor-pointer  rounded-lg overflow-hidden">
                    <img
                      src={item.icon}
                      className="w-full h-full object-cover"
                    ></img>
                  </div>
                </>
              );
            })}
          </div>
          <h1 className="text-white">
            powered by{" "}
            <a
              href="https://jikan.moe/"
              className="text-blue-400 border-b border-b-blue-400"
            >
              jikan api
            </a>
          </h1>
        </div>
      </section>
       <div className="w-full flex  justify-center h-[2px] opacity-50 bg-white">
        <h1 className="text-white text-sm text-center  mt-3">
          &copy;  2024 AnimeX. All Rights Reserved.
        </h1>
        
       </div>
    </section>
  );
}

export default Footer;
