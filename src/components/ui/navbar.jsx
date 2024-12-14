import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegCompass } from "react-icons/fa6";
import { useState } from "react";
function NavBar(){
    const [activeIndex,setActiveIndex]=useState(0)
    const icons=[
        {
            icon:<FaHome />,
        },
        {
            icon:<CiSearch  />
        },
        {
            icon:<CiBookmark  />
        },
        {
            icon:<CgProfile  />
        }
    ]
    return(
        <nav className="w-full px-9  fixed bottom-0 justify-between  h-16 flex items-center bg-purpleSemiDark">
           {icons.map((icon,index)=><span onClick={()=>setActiveIndex(index)} key={index} className={`text-3xl ${activeIndex===index && '  -translate-y-1/2 navbar-active w-16 h-16 flex items-center justify-center rounded-full bg-purpleLight text-white '} transition-all ease-in-out duration-300 text-white `}>{icon.icon}</span>)}
        </nav>
    )
}

export default NavBar