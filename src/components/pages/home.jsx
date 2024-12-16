import NavBar from "../ui/navbar"
import Header from "../layout/home/header"
import { useState,useEffect } from "react"
import { getTopAnime } from "../../services/api"
import Recomended from "../layout/home/recomended"
import ForYou from "../layout/home/foryou"
import { getRecomended } from "../../services/api"
import { startTransition } from "react"
import { FaFire } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa"
import { getGenres } from "../../services/api"
import Genre from "../layout/home/genre"
function Home(){
    const [topAnime,setTopAnime]=useState([])
    const [recomended,setRecomended]=useState([])
    const [genres,setGenres]=useState([])

    useEffect(()=>{
        getGenres(res=>
            startTransition(()=>{
                setGenres(res.data)
            })
        )
    },[])

    useEffect(()=>{
        getTopAnime(res=>
            startTransition(()=>{
                setTopAnime(res.data)
            })
        )
    },[])


       useEffect(()=>{
        getRecomended(res=>
            startTransition(()=>{
                setRecomended(res.data)
                
            })
        )
    },[])

    {console.log(recomended)}


    if(!topAnime && recomended==undefined){
        return(
            <h1>loading</h1>
        )
    }


    
    
    return(
        <>
        <NavBar></NavBar>

        <div className="min-h-screen pb-12 overflow-x-hidden relative  bg-purpleLight">

            <Header topAnime={topAnime} ></Header>
            <Recomended topAnime={topAnime} title="Trending" nav="2" icon={<FaFire />}></Recomended>
            <Recomended topAnime={recomended} title="Recomended" nav="3" icon={<FaThumbsUp />}></Recomended>
            <Genre genres={genres}></Genre>
           

            {/* <NavBar></NavBar>
            <Recomended topAnime={topAnime}></Recomended>
            <ForYou recomended={recomended}></ForYou> */}
            {/* <div className="w-[900px] lg:w-full lg:-bottom-1/4  h-[250px] left-1/2 -translate-x-1/2 rotate-12 bg-purpleSemiDark blur-3xl opacity-75 absolute bottom-1/4"></div> */}
        </div>
        </>
    )
}

export default Home