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