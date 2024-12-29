import VideoCard from "../../ui/details/videocard"
import img from "../../../../public/img/no.png"
import NoData from "../../ui/details/nodata"
function Episode({item}){
    return(
        <div className="w-full flex flex-wrap justify-start gap-2 min-h-[400px]">
           {item.length > 0 ? item.map((item,index)=>(<VideoCard key={index} item={item}></VideoCard>)):<NoData img={img}></NoData>}
        </div>
    )
}

export default Episode