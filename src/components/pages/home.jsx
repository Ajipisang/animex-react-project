import NavBar from "../ui/navbar"
import Header from "../layout/home/header"
import { useState,useEffect } from "react"
import { getTopAnime } from "../../services/api"
function Home(){
    const [topAnime,setTopAnime]=useState([])
    useEffect(()=>{
        getTopAnime(res=>setTopAnime(res.data))
    },[])

    
    
    return(
        <div className="min-h-screen bg-purpleLight">
            <Header topAnime={topAnime} ></Header>
            <NavBar></NavBar>
        </div>
    )
}

export default Home