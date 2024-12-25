import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegCompass } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { useState,useEffect } from "react";
import { IoCompassSharp } from "react-icons/io5";function NavBar(){
    const [activeIndex,setActiveIndex]=useState(0)
    const [isSearch,setIsSearch]=useState(false)
    const icons=[
        {
            icon:<FaHome />,
            title:"Home"
        },
        {
            icon:<IoCompassSharp  />,
            title:"Discover" 
        },
        {
            icon:<CiBookmark  />,
            title:"Bookmark"
        },
        {
            icon:<CgProfile  />,
            title:"Profile"
        }
    ]
    return(
        <>
        <nav className="w-full lg:hidden z-20 px-9  fixed bottom-0 justify-between  h-16 flex items-center bg-purpleSemiDark">
           {icons.map((icon,index)=>
           <div className="relative ">
                <span onClick={()=>setActiveIndex(index)} key={index} className={`text-3xl ${activeIndex===index && '  -translate-y-1/2 navbar-active w-16 h-16 flex items-center justify-center rounded-full bg-purpleLight text-white '} transition-all ease-in-out duration-300 text-white `}>{icon.icon}</span>
                <p className={`text-white text-sm ${activeIndex===index ? 'opacity-100 z-20 absolute top-[35px] left-1/2 -translate-x-1/2' : 'opacity-0 translate-y-4'}  transition-all ease-in-out duration-300`}>{icon.title}</p>
           </div>
           )}
        </nav>
        <div className="sticky  -top-1 lg:top-0  z-50">
            <nav className="flex   lg:flex px-9 lg:px-12 w-full h-[50px] lg:h-[50px]   items-center justify-between  bg-purpleSemiDark">
                <h1 className="text-2xl text-white">AnimeX.</h1>

                <div className="w-[400px] hidden  lg:flex justify-between items-center h-full ">
                    {icons.map((icon,index)=>
                    <div className="relative cursor-pointer flex gap-2">
                        <span key={index} className="text-xl  text-white">{icon.icon}</span>
                        <p className="text-white text-sm ">{icon.title}</p>
                    </div>
                    )}
                </div>


                <div className="lg:w-auto w-auto flex items-center gap-3 h-full ">
                    <CiSearch onClick={()=>setIsSearch(!isSearch)} className={`text-xl  cursor-pointer ${!isSearch ? "text-white" :"text-amber-500  "} transisision-all ease-in-out duration-300`}/>
                    <div className=" w-auto cursor-pointer h-3/5 flex gap-2 items-center rounded-lg px-2 bg-amber-600">
                        <CiLogin className="text-md lg:text-xl text-white"/>
                        <h1 className="text-white hidden lg:block">Login</h1>
                    </div>
                </div>


            
            

            </nav>

            <div className={`w-[350px] ${isSearch ? "opacity-100 h-[40px]" : "opacity-0 invisible h-0"} rounded-lg left-1/2 -translate-x-1/2 absolute  top-[55px]  flex items-center justify-center z-30 transition-all ease-in-out duration-300  bg-purpleLight`}>
                    <input type="text" placeholder="ex : naruto" className="w-full h-full outline-none rounded-lg px-3  bg-white text-black"></input>
            </div>
        </div>
      
        </>
    )
}

export default NavBar