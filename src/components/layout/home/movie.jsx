import MovieCard from "../../fragments/home/moviecard";
import { MdLocalMovies } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
function Movie(props) {
  const { topMovie, title, variant, icon, isHide } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  useEffect(() => {
    // Pastikan referensi diatur setelah DOM selesai dirender
    prevRef.current = document.getElementById(`prevButton${variant}`);
    nextRef.current = document.getElementById(`nextButton${variant}`);
  }, [variant]);

  return (
    <div className="w-full  px-5 h-full  lg:h-auto mt-9">
      <div className="w-full items-center flex justify-between">
        <div className="flex items-center gap-1">
          <span className="text-white text-3xl">{icon}</span>

          <h1 className="text-white text-2xl">{title}</h1>
        </div>

        <div className="flex gap-2 items-center text-white text-xl">
          <IoArrowBackCircle
            className={`${isBeginning && "opacity-50 cursor-not-allowed"} cursor-pointer`}
            id={`prevButton${variant}`}
          />
          <IoArrowForwardCircleSharp
            className={`${isEnd && "opacity-50 cursor-not-allowed"} cursor-pointer`}
            id={`nextButton${variant}`}
          />
        </div>
      </div>

      <div className="w-full mt-4 flex flex-wrap gap-6  lg:justify-start h-full rounded-xl gap-y-4 relative">
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
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
        >
          {topMovie.slice(0, 30).map((item, index) => (
            <SwiperSlide key={index}>
              <MovieCard isHide={isHide} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

    
      </div>
    </div>
  );
}

export default Movie;
