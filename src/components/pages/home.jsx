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
import Rank from "../layout/home/rank"
import { getTopAnimes } from "../../services/api"
import { getTopManga } from "../../services/api"
import { getTopCharacters } from "../../services/api"
import Movie from "../layout/home/movie"
import { get } from "lodash"
import { getTopMovie } from "../../services/api"
import { upcoming } from "../../services/api"
import { MdLocalMovies } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { topOva } from "../../services/api"
import { RiMovieAiFill } from "react-icons/ri";
import { special } from "../../services/api"
import Loading from "./loading"
import { GiRainbowStar } from "react-icons/gi";
function Home(){
    const [topAnime,setTopAnime]=useState([]);
    const [recomended,setRecomended]=useState([]);
    const [genres,setGenres]=useState([]);
    const [topAnimes,setTopAnimes]=useState([]);
    const [topManga,setTopManga]=useState([]);
    const [topChar,setTopChar]=useState([]);
    const [topMovie,setTopMovie]=useState([]);
    const [upcomings,setUpcoming]=useState([]);
    const [topOvas,setTopOvas]=useState([]);
    const [spec,setSpec]=useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        getTopAnimes(res=>
            startTransition(()=>{
                setTopAnimes(res.data)
            })
        )
    },[])

    useEffect(()=>{
        getTopManga(res=>
            startTransition(()=>{
                setTopManga(res.data)
            })
        )

        getTopCharacters(res=>
            startTransition(()=>{
                setTopChar(res.data)
            })        
        )

        getTopMovie(res=>
            startTransition(()=>{
                setTopMovie(res.data)
            })        
        )

        topOva(res=>
            startTransition(()=>{
                setTopOvas(res.data)
            })        
        )

        upcoming(res=>{
            startTransition(()=>{
                setUpcoming(res.data)
            })
        })

        special(res=>{
            startTransition(()=>{
                setSpec(res.data)
            })
        })

 
        


        
    },[])

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


    useEffect(() => {
        if (
          topAnime.length > 0 &&
          recomended.length > 0 &&
          genres.length > 0 &&
          topAnimes.length > 0 &&
          topManga.length > 0 &&
          topChar.length > 0 &&
          topMovie.length > 0 &&
          upcomings.length > 0 &&
          topOvas.length > 0 &&
          spec.length > 0 

        ) {
          setLoading(false); // set isLoading to false when all data is loaded
        }
      }, [
        topAnime,
        recomended,
        genres,
        topAnimes,
        topManga,
        topChar,
        topMovie,
        upcomings,
        topOvas,
        spec,
       
      ]);

      if(isLoading){
        return <Loading></Loading>
      }



    
    
    return(
        <>
        <NavBar></NavBar>

        <div className="min-h-screen pb-12 overflow-x-hidden relative  bg-purpleLight">

            <Header topAnime={topAnime} ></Header>
            <Recomended topAnime={topAnime} title="Trending" nav="2" icon={<FaFire />}></Recomended>
            <Recomended topAnime={recomended} title="Recomended" nav="3" icon={<FaThumbsUp />}></Recomended>
            <div className="lg:flex hidden flex-col  lg:flex-row lg:w-full px-9 mx-auto ">
                <div className="lg:max-w-1/4 h-auto">
                    <Genre genres={genres} setGenres={setGenres} ></Genre>
                    <Rank topAnimes={topAnimes} topManga={topManga} topChar={topChar}></Rank>
                </div>

                <div className="flex flex-col w-full lg:w-[900px] ">
                    <Movie topMovie={topMovie} title="Movies" variant="7" isHide={false} icon={<MdLocalMovies />}></Movie>
                    <Movie topMovie={upcomings} title="Upcoming" variant="4" isHide={true} icon={<MdAccessTimeFilled />}></Movie>
             
                    <Movie topMovie={topOvas} title="ovas" variant="5" isHide={false} icon={<RiMovieAiFill />}></Movie>

                    <Movie topMovie={spec} title="Special's" variant="6" isHide={false} icon={<GiRainbowStar />}></Movie>


                   

                </div>

            
            
           
            </div>

            <div className="lg:hidden">
                    <Genre genres={genres} setGenres={setGenres}></Genre>
                    <Rank topAnimes={topAnimes} topManga={topManga} topChar={topChar}></Rank>
                    <Movie topMovie={topMovie} title="Movies" variant="7" isHide={false} icon={<MdLocalMovies />}></Movie>
                    <Movie topMovie={upcomings} title="Upcoming" variant="4" isHide={true} icon={<RiMovieAiFill />}></Movie>
            </div>
           
           

       
        </div>
        </>
    )
}

export default Home