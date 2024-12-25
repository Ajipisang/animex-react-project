import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegCompass } from "react-icons/fa6";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { IoCompassSharp } from "react-icons/io5";function NavBar(){
    const [activeIndex,setActiveIndex]=useState(0)
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
        <nav className="w-full lg:hidden px-9  fixed bottom-0 justify-between  h-16 flex items-center bg-purpleSemiDark">
           {icons.map((icon,index)=>
           <div className="relative ">
                <span onClick={()=>setActiveIndex(index)} key={index} className={`text-3xl ${activeIndex===index && '  -translate-y-1/2 navbar-active w-16 h-16 flex items-center justify-center rounded-full bg-purpleLight text-white '} transition-all ease-in-out duration-300 text-white `}>{icon.icon}</span>
                <p className={`text-white text-sm ${activeIndex===index ? 'opacity-100 z-20 absolute top-[35px] left-1/2 -translate-x-1/2' : 'opacity-0 translate-y-4'}  transition-all ease-in-out duration-300`}>{icon.title}</p>
           </div>
           )}
        </nav>
        <nav className="md:flex sticky z-50 top-0 lg:flex px-12 w-full h-[50px]   items-center justify-between hidden bg-purpleSemiDark">
            <h1 className="text-2xl text-white">AnimeX.</h1>

            <div className="w-[400px] flex justify-between items-center h-full ">
                {icons.map((icon,index)=>
                <div className="relative cursor-pointer flex gap-2">
                    <span key={index} className="text-xl text-white">{icon.icon}</span>
                    <p className="text-white text-sm ">{icon.title}</p>
                </div>
                )}
            </div>


            <div className="w-[120px] flex items-center gap-3 h-full ">
                <CiSearch className="text-xl text-white cursor-pointer"/>
                <div className="w-[90px] cursor-pointer h-3/5 flex gap-2 items-center rounded-lg px-2 bg-amber-600">
                    <CiLogin className="text-xl text-white"/>
                    <h1 className="text-white">Login</h1>
                </div>
            </div>

           

        </nav>
        </>
    )
}

export default NavBar