import axios from "axios";



export const getTopAnime=async(callback)=>{
    try{
        axios.get("https://api.jikan.moe/v4/seasons/now").then(res => callback(res.data)).catch(err=>console.log(err));
    }catch (err){
        console.log(err);
    }
}