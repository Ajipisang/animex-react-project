import HeaderDiscover from "../../layout/discover/header"
import NavBar from "../../ui/navbar"
import { useState,useEffect } from "react"
import { getGenres } from "../../../services/api"
import Loading from "../loading"
import { set } from "lodash"
function Discover(){
    const [genresData,setGenresData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        getGenres((data)=>{
            setGenresData(data.data);
        })
    },[])

    useEffect(()=>{
        if(genresData !=0){
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
        <div className="w-full min-h-screen bg-purpleSemiDark flex flex-col gap-2">
            <HeaderDiscover genres={genresData}></HeaderDiscover>
        </div>
       </>
    )
}

export default Discover