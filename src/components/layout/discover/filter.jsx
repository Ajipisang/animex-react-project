import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import YearContent from "../../fragments/discover/yearcontent";
import SeasonContent from "../../fragments/discover/seaonscontent";
import GenreContent from "../../fragments/discover/genre";
import FormatContent from "../../fragments/discover/formatcontent";
function FilterDiscover({ isActive, setIsActive,genres }) {
  const [activeCatalog, setActiveCatalog] = useState(null);
  const [seasonData,setSeasonData]=useState([]);
  const [genresIndex,setGenresIndex]=useState([]);
  const [formatData,setFormatData]=useState([]);
  const data = [
    {
      title: "year ",
      content: <YearContent />,
    },
    {
        title: "season",
        content: <SeasonContent seasonData={seasonData} setSeasonData={setSeasonData} />,
      },
      {
        title:"Genre",
        content:<GenreContent genres={genres} genresIndex={genresIndex} setGenresIndex={setGenresIndex}></GenreContent>
      },
      {
        title:"Format",
        content:<FormatContent formatData={formatData} setFormatData={setFormatData}></FormatContent>
      }

   
  ];

 

  const handleClick = (index) => {
    if (activeCatalog === index) {
      setActiveCatalog(null); // Tutup jika elemen aktif di-klik
    } else {
      setActiveCatalog(index); // Buka elemen baru
    }
  };

  return (
    <>
      <div
        className={`w-full ${
          isActive
            ? "translate-y-0 h-[400px] overflow-y-scroll opacity-100 visible"
            : "translate-y-1 h-0 invisible hidden"
        } transition-all duration-500 ease-in-out bg-white sticky rounded-lg bottom-12 z-30 flex flex-col gap-4 items-center p-6 pb-12`}
      >
        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl text-black">Catalog</h1>
          <MdOutlineClose
            onClick={() => setIsActive(false)}
            className="text-2xl text-black"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
           
            className="w-full flex flex-col mt-5 gap-1"
          >
            <div  onClick={() => handleClick(index)} className="w-full flex items-center justify-between">
              <h1 className="text-lg text-black capitalize font-semibold">
                {item.title}
              </h1>
              <IoIosArrowDown
                className={`${
                  activeCatalog === index ? "rotate-180" : "rotate-0"
                } text-black text-xl transition-transform duration-300`}
              />
            </div>
            <div className="w-full h-[1px] mt-1 bg-black/50"></div>

            <div
              className={`${
                activeCatalog === index
                  ? "opacity-100 translate-y-0 overflow-scroll max-h-[500px]"
                  : "opacity-0 -translate-y-[10px] max-h-0"
              } transition-all duration-300 overflow-hidden`}
            >
              {item.content}
            </div>
          </div>
        ))}

      
      </div>
    </>
  );
}

export default FilterDiscover;
