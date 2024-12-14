import { GoPlus } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
function CardHeader({item}){
    return(
         <section className="w-full text-white flex flex-col justify-end items-center h-[450px] bg-header relative" style={{ 
                            background: `url(${item.images.jpg.large_image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                          >
                           
                          <div className="w-[350px]  h-auto gap-2 z-30   flex flex-col justify-between">
                         
                            <h1 className="text-2xl font-semibold">{item.title} ({item.year})</h1>
                            <div  className="w-full text-white capitalize font-thin  text-[17px] flex justify-between">
                                {item.genres.map((item,index)=>{
                                    return(
                                        <h1 key={index}>{item.name}</h1>
                                    )
                                })}
                              
                                
                            </div>
                
                            <div className="w-full  flex px-6 justify-between items-center h-full ">
                                <div className="flex items-center text-sm flex-col text-white gap-2">
                                    <GoPlus className="w-[30px] h-[30px]"/>
                                    <h1>my list</h1>
                                </div>
                
                                 <button className="flex w-1/2 h-3/4 items-center  flex-col text-[#E5E5E5] text-lg capitalize bg-purpleSemiDark rounded-[20px] ">
                                    <h1 className="m-auto">play</h1>
                                </button>
                
                                 <div className="flex items-center text-sm flex-col text-white gap-2">
                                    <IoMdInformationCircleOutline className="w-[30px] h-[30px]"/>
                                    <h1>info</h1>
                                </div>
                            </div>
                          </div>
                        </section>
    )
}

export default CardHeader