import NavBar from "../ui/navbar"
import Header from "../layout/home/header"
import { useState,useEffect } from "react"
import { getTopAnime } from "../../services/api"
import Recomended from "../layout/home/recomended"
import ForYou from "../layout/home/foryou"
import { getRecomended } from "../../services/api"
function Home(){
    const [topAnime,setTopAnime]=useState([])
    const [recomended,setRecomended]=useState([])
    useEffect(()=>{
        getTopAnime(res=>setTopAnime(res.data))
    },[])


    useEffect(()=>{
        getRecomended(res=>setRecomended(res.data))
    },[])
   

    
    
    return(
        <div className="min-h-screen overflow-x-hidden relative bg-purpleLight">
            <Header topAnime={topAnime} ></Header>
            <NavBar></NavBar>
            <Recomended topAnime={topAnime}></Recomended>
            <ForYou recomended={recomended}></ForYou>
            <div className="w-[900px]  h-[250px] left-1/2 -translate-x-1/2 rotate-12 bg-purpleSemiDark blur-3xl opacity-75 absolute bottom-1/4"></div>
        </div>
    )
}

export default Home