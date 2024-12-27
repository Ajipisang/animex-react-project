import axios from "axios";
import _ from 'lodash';
import Bottleneck from "bottleneck";


const limiter=new Bottleneck({
    maxConcurrent: 1,
    minTime: 1000
})

const handleRequest = async (url, callback) => {
    try {
      await limiter.schedule(() =>
        axios.get(url)
          .then((res) => callback(res.data))
          .catch((err) => {
            if (err.response && err.response.status === 429) {
              setTimeout(() => handleRequest(url, callback), 1000);
            } else {
              console.error(err);
            }
          })
      );
    } catch (err) {
      console.error(err);
    }
  };

 
  // Fetch data untuk rekomendasi
  export const getRecomended = (callback) => {
    handleRequest("https://api.jikan.moe/v4/recommendations/anime", callback);
  };
  
  // Fetch data untuk top anime
  export const getTopAnime = (callback) => {
    handleRequest("https://api.jikan.moe/v4/seasons/now", callback);
  };

  export const getGenres=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/genres/anime",callback);
  }


  export const getTopAnimes=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/top/anime",callback)
  }

  export const getTopManga=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/top/manga",callback)
  }

  export const getTopCharacters=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/top/characters",callback)
  } 

  export const getTopMovie=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/anime?type=movie",callback)
  }

  export const upcoming=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/seasons/upcoming",callback)
  }

  export const topOva=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/top/anime?type=ova",callback)
  }

  export const special=(callback)=>{
    handleRequest("https://api.jikan.moe/v4/top/anime?type=special&filter=favorite",callback)
  }

  export const search=(query,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime?q=${query}`,callback)
  }

  export const detailsAnime=(id,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime/${id}`,callback)
  }

  export const characters=(id,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime/${id}/characters`,callback)
  }

  export const reviews=(id,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime/${id}/reviews`,callback)
  }


  export const statistics=(id,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime/${id}/statistics`,callback)
  }

  export const video=(id,callback)=>{
    handleRequest(`https://api.jikan.moe/v4/anime/${id}/videos`,callback)
  }