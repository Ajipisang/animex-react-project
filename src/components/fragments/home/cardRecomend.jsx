import { FaStar } from "react-icons/fa";
function CardRecomend({item}) {
  const getTitle = (item) => {
    const title = item?.title || item?.entry?.[0]?.title || "";
    return title.length > 18 ? title.slice(0, 16) + "..." : title;
  };
  return (
    <div className="max-w-[170px] lg:max-w-[200px]  h-full flex flex-col gap-1">
      <div className="w-full shadow-xl lg:h-[250px] h-[220px] overflow-hidden relative rounded-xl ">
        <img
          src={    item?.images?.jpg?.image_url || 
            item?.entry?.[0]?.images?.jpg?.image_url || 
            "fallback-image-url.jpg"}
          className="w-full h-full object-cover"
        ></img>

        <div className={`w-1/3 h-7 ${item.score ? "":"hidden"} absolute top-0 right-0 bg-purpleSemiDark flex items-center gap-1 justify-center text-sm shadow-lg text-white`}>
          <FaStar />
          <h1>{item.score || ""}</h1>
        </div>

        <div className={`w-1/3 h-7 absolute bottom-1 left-1 bg-purpleSemiDark flex items-center gap-1 ${item.type ? "":"hidden"} justify-center text-sm shadow-lg text-white rounded-lg`}>
          <h1>{item.type || ""}</h1>
        </div>
      </div>
      <h1 className="max-w-[160px] text-white">
       {getTitle(item) || ""}
      </h1>
      <h1 className="leading-[15px] text-sm text-[rgba(229,229,229,0.7)]">{item.year || ""} </h1>
    </div>
  );
}


export default CardRecomend