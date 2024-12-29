import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
function HeaderDiscover({genres}){
    return(
        <div className="w-full flex px-2 flex-col min-h-[300px]  mt-2">
            <div className="w-full  shadow-xl relative h-[200px] rounded-lg bg-black overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6USGoaH50HLGOjsFcLLjZrb3Z24ISFguzpA&s" className="w-full opacity-90 h-full object-cover"></img>
                <div className="w-3/4 absolute top-1/2 left-4 h-auto">
                    <h1 className="text-3xl text-yellow-500/90  font-semibold ">Discover</h1>
                    <p className="text-white text-sm leading-6">Discover the best anime and manga</p>
                </div>
            </div>

            <div className="w-full flex gap-2  mt-2">
            <div className="w-full mt-5">
            <Swiper
                slidesPerView={3}
                spaceBetween={10} // Memberikan jarak antar slide
                freeMode={true} // Membuat slide bebas bergerak
                
                className="mySwiper"
            >
                {genres.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="shrink-0 w-auto px-2 select-none flex text-center py-1 bg-yellow-500/50 text-white rounded-lg"
                    >
                        <h1 className="truncate text-sm whitespace-nowrap text-ellipsis capitalize ">
                            {item.name}
                        </h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        </div>

        </div>
    )
}

export default HeaderDiscover