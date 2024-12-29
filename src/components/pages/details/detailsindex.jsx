import { useParams } from "react-router-dom";
import NavBar from "../../ui/navbar";
import HeaderDetails from "../../layout/details/header";
import BodyDetails from "../../layout/details/body";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { detailsAnime } from "../../../services/api";
import { characters } from "../../../services/api";
import { reviews } from "../../../services/api";
import { statistics } from "../../../services/api";
import { video } from "../../../services/api";
import RecomendedAnime from "../../layout/details/recomendation";
import { recomended } from "../../../services/api";
import { MdMovie } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import { PiShootingStarFill } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { TbChairDirector } from "react-icons/tb";
import { getGenres } from "../../../services/api";
import Footer from "../../layout/home/footer";
function Details() {
  const params = useParams();
  const id = params.id;
  const [dataDetails, setDataDetails] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [dataReviews, setDataReviews] = useState([]);
  const [dataStats, setDataStats] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [recomendedData, setRecomendedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    detailsAnime(id, (data) => {
      setDataDetails(data.data);
    });
    characters(id, (data) => {
      setCharDetails(data.data);
    });

    reviews(id, (data) => {
      setDataReviews(data.data);
    });

    statistics(id, (data) => {
      setDataStats(data.data);
    });

    video(id, (data) => {
      setDataVideo(data.data);
    });

    recomended(id, (data) => {
      setRecomendedData(data.data);
    });

    getGenres((data) => {
        setGenresData(data.data);
    })
  }, [id]);

  useEffect(() => {
    if (
      dataDetails.length !== 0 &&
      charDetails.length !== 0 &&
      dataReviews.length !== 0 &&
      dataStats.length !== 0 &&
      recomendedData.length !== 0 &&
      genresData.length !== 0
    ) {
      setIsLoading(false);
    }
  }, [
    dataDetails,
    charDetails,
    dataReviews,
    dataStats,
    dataVideo,
    recomendedData,
  ]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const data = [
    {
      icon: <MdMovie className="text-xl text-yellow-500"></MdMovie>,
      title: "Movie",
    },
    {
      icon: <RiMovieFill className="text-xl text-yellow-500"></RiMovieFill>,
      title: "Series",
    },
    {
      icon: <IoBook className="text-xl text-yellow-500"></IoBook>,
      title: "Manga",
    },
    {
      icon: (
        <PiShootingStarFill className="text-xl text-yellow-500"></PiShootingStarFill>
      ),
      title: "OVA",
    },
   
  ];


  const data2=[
    {
        icon:<IoMdPerson className="text-xl text-yellow-500"></IoMdPerson>,
        title:"users"
    },
    {
        icon:<FaCalendar className="text-xl text-yellow-500"></FaCalendar>,
        title:"schedules"
    },
    {
        icon:<FaFire className="text-xl text-yellow-500"></FaFire>,
        title:"trending"
    },
    {
        icon: (
          <TbChairDirector className="text-xl text-yellow-500"></TbChairDirector>
        ),
        title: "producers",
      },
  ]
  return (
    <>
     
      
      <div className="w-full h-screen ">
      <div className="w-full h-full overflow-x-hidden   lg:pb-0 bg-purpleSemiDark">
        <NavBar></NavBar>
        <HeaderDetails item={dataDetails}></HeaderDetails>
        
        <div className="flex  lg:mt-[5%] w-full">
          <div className="mt-9 w-full h-full  lg:px-12">
            <div className="w-full min-h-screen  relative  flex gap-2">
              <div className="w-[400px] h-1/2 sticky top-[50px] rounded-lg  bg-purpleLight shadow-xl p-3 hidden lg:flex flex-col gap-2">
                <h1 className="text-3xl text-white font-semibold">Discover </h1>

                <div className="flex flex-col gap-1">
                  {data.map((item, index) => {
                    return (
                      <div className="flex cursor-pointer gap-2 mt-3 items-center">
                        {item.icon}
                        <h1 className="text-white ">{item.title}</h1>
                      </div>
                    );
                  })}
                </div>
                <div className="w-1/2 h-[1px] mt-1 bg-white opacity-50"></div>
                <div className="flex flex-col gap-3">
                    {data2.map((item, index) => {
                        return(
                            <div className="flex cursor-pointer gap-2 items-center">
                            {item.icon}
                            <h1 className="text-white  capitalize">{item.title}</h1>
                            </div>
                        )
                    })}                 
                </div>
                <div className="w-1/2 h-[1px] mt-2 bg-white "></div>
                <div className="flex flex-wrap mt-2 gap-y-2 gap-3">
                    {genresData.slice(0, 15).map((item, index) => {
                        return(
                            <div className="flex gap-2 items-center shadow-lg">
                            
                            <h1 className="text-white cursor-pointer hover:bg-yellow-500 bg-white/10 p-1 px-2  text-sm rounded-md  capitalize">{item.name}</h1>
                            </div>
                        )
                    })}

                                
                </div>
                <h1 className="text-white/50 text-sm mt-1 cursor-pointer">more...</h1>    
              </div>
              <BodyDetails
                item={dataDetails}
                char={charDetails}
                reviews={dataReviews}
                stat={dataStats}
                video={dataVideo.episodes}
              ></BodyDetails>
            </div>

            <RecomendedAnime data={recomendedData}></RecomendedAnime>
            <Footer></Footer>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Details;
