import { useParams } from "react-router-dom"
import NavBar from "../../ui/navbar";
import HeaderDetails from "../../layout/details/header";
import BodyDetails from "../../layout/details/body";
import { useState,useEffect } from "react";
import Loading from "../loading";
import { detailsAnime } from "../../../services/api";
import { characters } from "../../../services/api";
function Details(){
    const params=useParams();
    const id =params.id;
    const [dataDetails,setDataDetails]=useState([]);
    const [charDetails, setCharDetails] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        detailsAnime(id,(data)=>{
            setDataDetails(data.data)
            
        })
        characters(id,(data)=>{
            setCharDetails(data.data)
            
        })
    },[id])

    useEffect(()=>{
        if(dataDetails.length !==0 && charDetails.length !==0){
            setIsLoading(false)
        }
        console.log(charDetails)
    },[dataDetails,charDetails])




   
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <>
        <NavBar></NavBar>
        <div className="w-full h-auto pb-[100px] bg-purpleSemiDark">
            <HeaderDetails item={dataDetails} ></HeaderDetails>
            <div className="mt-[280px]">
                <BodyDetails item={dataDetails} char={charDetails}></BodyDetails>
            </div>
        </div>
        </>
    )
}

export default Details