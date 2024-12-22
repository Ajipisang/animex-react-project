import { GoPlus } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdPlayCircle } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { PiRankingLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
function CardHeader({ item }) {
    const data=[
        {
            icon:<MdPlayCircle/>,
            title:item.type,
            title2:""
        },
        {
            icon:<IoCalendarSharp/>,
            title:item.year,
            title2:item.season
            
        },
        {
            icon:<FaClock/>,
            title:item.duration,
            title2:""
        },
        {
            icon:<PiRankingLight/>,
            title:item.rank,
            title2:""
        }

    ]

    const button=[
        {
            icon:<GoPlus className="w-[20px] h-[20px]"/>,
            title:"Add to list",
            bg:"bg-purpleSemiDark"
        },
        {
            icon:<IoIosArrowForward className="w-[20px] h-[20px]"></IoIosArrowForward>,
            title:"More Details",
            bg:"bg-green-500"
            
        },
        {
            icon:<CiBookmark className="w-[20px] h-[20px]"/>,
            title:"Bookmark",
            bg:"bg-amber-600"
        }
    ]
  return (
    <>
      <section
        className="w-full lg:hidden z-10  text-white flex flex-col justify-end lg:justify-center lg:items-start lg:px-8 items-center lg:h-[600px] h-[450px] bg-header relative"
        style={{
          background: `url(${item.images.jpg.large_image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[350px] lg:hidden  h-auto gap-2 z-30   flex flex-col justify-between">
          <h1 className="text-2xl font-semibold">
            {item.title} ({item.year})
          </h1>
          <div className="w-full px-4 text-white capitalize font-thin  text-[17px] flex justify-between">
            {item.genres.map((item, index) => {
              return <h1 key={index}>{item.name}</h1>;
            })}
          </div>

          <div className="w-full  flex px-6 justify-between items-center h-full ">
            <div className="flex items-center text-sm flex-col text-white gap-2">
              <GoPlus className="w-[30px] h-[30px]" />
              <h1>my list</h1>
            </div>

            <button className="flex w-1/2 h-3/4 items-center  flex-col text-[#E5E5E5] text-lg capitalize bg-purpleSemiDark rounded-[20px] ">
              <h1 className="m-auto">play</h1>
            </button>

            <div className="flex items-center text-sm flex-col text-white gap-2">
              <IoMdInformationCircleOutline className="w-[30px] h-[30px]" />
              <h1>info</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden  lg:flex z-10  w-full  h-[550px] ">
        <div className="min-w-[550px] relative flex flex-col justify-center px-[100px] h-full">
         <div className="w-[700px] z-30 absolute gap-3 flex flex-col justify-center h-3/4 ">
            <h1 className="text-4xl  text-white font-thin">{item.title}</h1>

            <div className="w-auto items-center flex gap-4 text-sm h-[40px]">

            {data.map((item,index)=>{
                return(
                    <div key={index} className="flex text-white font-thin items-center gap-2">
                        {item.icon}
                        <h1>{item.title} {item.title2}</h1>
                    </div>
                )
            })}


            <div className={`w-auto ${item.rating =="R - 17+ (violence & profanity)" ? "bg-red-600" : "bg-green-600"}  flex items-center text-white rounded-[8px] p-1 px-2`}>
                <h1>{item.rating}</h1>
            </div>

            </div>


            <div className="w-auto items-center flex gap-4 text-sm h-[10px] ">

               {item.genres.map((item,index)=>{
                   return(
                       <div key={index} className="flex text-white text-sm font-thin items-center gap-2">
                           {item.name}
                       </div>
                   )
               })}

            </div>

            <h2 className="text-white font-thin text-[14px] mt-2" >{item.synopsis.substring(0,320)+" ..."}</h2>


            <div className="w-auto items-center flex gap-4 text-sm h-[40px]  ">
                {button.map((item,index)=>{
                   return(
                    <div key={index} className={`w-auto px-2 text-white ${item.bg} items-center justify-center rounded-lg flex gap-1  h-full `}>
                    <h1>{item.title}</h1>
                    {item.icon}
                </div>
                   ) 
                })}  
            </div>

            
         </div>

         

         
        </div>


        <div className="w-full h-full relative   bg-header3  ">
           
            <img src={item.trailer.images.maximum_image_url} className="w-full h-full object-cover object-center"></img>
        </div>
      </section>
    </>
  );
}

export default CardHeader;
