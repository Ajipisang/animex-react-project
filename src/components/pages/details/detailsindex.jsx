import { useParams } from "react-router-dom"
import NavBar from "../../ui/navbar";
import HeaderDetails from "../../layout/details/header";
import BodyDetails from "../../layout/details/body";
import { useState,useEffect } from "react";
import Loading from "../loading";
import { detailsAnime } from "../../../services/api";
import { characters } from "../../../services/api";
import { reviews } from "../../../services/api";
import { statistics } from "../../../services/api";
import { video } from "../../../services/api";
function Details(){
    const params=useParams();
    const id =params.id;
    const [dataDetails,setDataDetails]=useState([]);
    const [charDetails, setCharDetails] = useState([]);
    const [dataReviews, setDataReviews] = useState([]);
    const [dataStats, setDataStats] = useState([]);
    const [dataVideo, setDataVideo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        detailsAnime(id,(data)=>{
            setDataDetails(data.data)
            
        })
        characters(id,(data)=>{
            setCharDetails(data.data)
            
        })

        reviews(id,(data)=>{
            setDataReviews(data.data)
        })

        statistics(id,(data)=>{
            setDataStats(data.data)
        })

        video(id,(data)=>{
            setDataVideo(data.data)
        })
    },[id])

    useEffect(()=>{
        if(dataDetails.length !==0 && charDetails.length !==0 && dataReviews.length !==0 && dataStats.length !==0 ){
            setIsLoading(false)
        }
           

        
        
    },[dataDetails,charDetails,dataReviews,dataStats,dataVideo])




   
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <>
        <NavBar></NavBar>
        <div className="w-full h-auto pb-[100px] bg-purpleSemiDark">
            <HeaderDetails item={dataDetails} ></HeaderDetails>
            <div className="mt-9">
                <BodyDetails item={dataDetails} char={charDetails} reviews={dataReviews} stat={dataStats} video={dataVideo.episodes}></BodyDetails>
            </div>
        </div>
        </>
    )
}

export default Details