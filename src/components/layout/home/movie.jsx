import MovieCard from "../../fragments/home/moviecard";
import { MdLocalMovies } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Navigation } from "swiper/modules";
import { useRef,useEffect,useState} from "react";
function Movie(props) {
    const { topMovie } = props;
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    useEffect(() => {
      // Pastikan referensi diatur setelah DOM selesai dirender
      prevRef.current = document.getElementById('prevButton');
      nextRef.current = document.getElementById('nextButton');
    }, []);
  
    return (
      <div className="w-full px-5 h-full mt-9">
        <div className="w-full items-center flex justify-between">
          <div className="flex items-center gap-1">
            <MdLocalMovies className="text-white text-3xl" />
            <h1 className="text-white text-2xl">Movies</h1>
          </div>
  
          <div className="flex gap-2 items-center text-white text-xl">
            <IoArrowBackCircle className={`${isBeginning && "opacity-50"}`} id="prevButton" />
            <IoArrowForwardCircleSharp  className={`${isEnd && "opacity-50"}`} id="nextButton" />
          </div>
        </div>
  
        <div className="w-full mt-4 flex flex-wrap gap-6 justify-center h-full rounded-xl gap-y-4 relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={2}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={(swiper)=>{
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {topMovie.slice(0, 10).map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        <div className="flex gap-2 mt-4 items-center justify-center text-white text-xl opacity-50 text-center">
          <h1 className="r ">discover more</h1>
          <IoIosArrowForward className="text-white " />
        </div>
      </div>
    );
  }
  
  export default Movie;
  