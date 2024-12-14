import { FaStar } from "react-icons/fa";
function CardRecomend({item}) {
  return (
    <div className="max-w-[160px] h-full flex flex-col gap-1">
      <div className="w-full shadow-xl h-[220px] overflow-hidden relative rounded-xl ">
        <img
          src={item.images.jpg.image_url}
          className="w-full h-full object-cover"
        ></img>

        <div className="w-1/3 h-7 absolute top-0 right-0 bg-purpleSemiDark flex items-center gap-1 justify-center text-sm shadow-lg text-white">
          <FaStar />
          <h1>{item.score}</h1>
        </div>

        <div className="w-1/3 h-7 absolute bottom-1 left-1 bg-purpleSemiDark flex items-center gap-1 justify-center text-sm shadow-lg text-white rounded-lg">
          <h1>{item.type}</h1>
        </div>
      </div>
      <h1 className="max-w-[160px] text-white">
       {item.title.length > 18 ? item.title.slice(0, 18) + "..." : item.title}
      </h1>
      <h1 className="leading-[15px] text-[rgba(229,229,229,0.8)]">{item.year}</h1>
    </div>
  );
}


export default CardRecomend