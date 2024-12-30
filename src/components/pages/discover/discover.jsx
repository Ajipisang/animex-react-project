import HeaderDiscover from "../../layout/discover/header";
import NavBar from "../../ui/navbar";
import { useState, useEffect } from "react";
import { getGenres } from "../../../services/api";
import Loading from "../loading";
import { set } from "lodash";
import MainDiscover from "../../layout/discover/main";
import { getAnime } from "../../../services/api";

import FilterDiscover from "../../layout/discover/filter";
function Discover() {
  const [genresData, setGenresData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animeData, setAnimeData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    getGenres((data) => {
      setGenresData(data.data);
    });

    getAnime((data) => {
      setAnimeData(data.data);
    });
  }, []);

  useEffect(() => {
    if (genresData !== 0 && animeData !== 0) {
      setIsLoading(false);
    }
  }, [genresData]);
  if (isLoading) {
    console.log(genresData);
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="min-h-screen bg-purpleSemiDark relative">
        <NavBar></NavBar>
        <div className="w-full relative px-2 min-h-screen  flex flex-col">
          <HeaderDiscover genres={genresData}></HeaderDiscover>
          <MainDiscover
            isActive={isActive}
            setIsActive={setIsActive}
            anime={animeData}
          ></MainDiscover>
         <FilterDiscover genres={genresData} isActive={isActive} setIsActive={setIsActive}></FilterDiscover>
        </div>

        <div className={`w-full ${isActive ? "visible" : "invisible hidden"} h-full absolute top-0 bg-black/50 z-10`}></div>
      </div>
    </>
  );
}

export default Discover;
