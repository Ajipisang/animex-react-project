import HeaderDiscover from "../../layout/discover/header"
import NavBar from "../../ui/navbar"
import { useState,useEffect } from "react"
import { getGenres } from "../../../services/api"
import Loading from "../loading"
import { set } from "lodash"
import MainDiscover from "../../layout/discover/main"
import { getAnime } from "../../../services/api"
function Discover(){
    const [genresData,setGenresData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [animeData,setAnimeData] = useState([]);
    useEffect(()=>{
        getGenres((data)=>{
            setGenresData(data.data);
        })

        getAnime((data)=>{
            setAnimeData(data.data);
        })
    },[])

    useEffect(()=>{
        if(genresData !==0 && animeData !==0){
           setIsLoading(false)
        }
    },[genresData])
    if(isLoading){
        console.log(genresData)
        return(
            <Loading></Loading>
        )
    }
    return(
       <>
        <NavBar></NavBar>
        <div className="w-full  px-2 min-h-screen bg-purpleSemiDark flex flex-col ">
            <HeaderDiscover genres={genresData}></HeaderDiscover>
            <MainDiscover anime={animeData}></MainDiscover>
        </div>
       </>
    )
}

export default Discover