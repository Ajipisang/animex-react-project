import NavBar from "../ui/navbar"
import Header from "../layout/home/header"
import { useState,useEffect } from "react"
import { getTopAnime } from "../../services/api"
import Recomended from "../layout/home/recomended"
function Home(){
    const [topAnime,setTopAnime]=useState([])
    useEffect(()=>{
        getTopAnime(res=>setTopAnime(res.data))
    },[])

    
    
    return(
        <div className="min-h-screen bg-purpleLight">
            <Header topAnime={topAnime} ></Header>
            <NavBar></NavBar>
            <Recomended topAnime={topAnime}></Recomended>
        </div>
    )
}

export default Home