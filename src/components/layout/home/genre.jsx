import { set } from "lodash";
import CardGenres from "../../fragments/home/cardgenres"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
function Genre(props){
    const {genres,setGenres,defaultGenres,setDefaultGenres}=props;
    const [show, setShow] = useState(10);
    const [genresFilter, setGenresFilter] = useState(genres);
    

    const handleClick=()=>{
        setShow(show+10);

        if(show >= genres.length){
            setShow(10);
        }
    }

    const handleSearch=(e)=>{
        e.preventDefault();
        const query=e.target.value;

        if(query.length === 0){
            setGenresFilter(genres);
            return
        }else{
            const filterSearch=genres.filter(item=>{
                if(item.name.toLowerCase().includes(query.toLowerCase())){
                    return item
                }
            })
    
            if(filterSearch.length > 0){
                setGenresFilter([...filterSearch]);
            }else{
                setGenresFilter(["no data"]);
            }
        }
       
        
    }
  
    return(
        <section className="mt-9 flex flex-col gap-4 z-20 px-5  w-full">
            <h1 className="text-white text-2xl capitalize font-semibold">genres</h1>
            <div className="w-full transition-all duration-300 ease-in-out  shadow-lg p-5 bg-purpleSemiDark rounded-lg h-full" >

                <div className="flex justify-start gap-y-4 max-h-[200px] overflow-y-scroll flex-wrap gap-2">
                    { genresFilter[0]=="no data"? <h1 className="text-white text-xl font-bold">no data</h1> : genresFilter.map((item,index)=><CardGenres key={item.mal_id} item={item} index={index}></CardGenres>)   }
                </div>

                <div onClick={handleClick} className="w-full h-[40px] relative flex rounded-lg mt-6 group">
                  <input name="search" onChange={handleSearch} className="w-full outline-none focus:border-2 focus:border-amber-600 transition-all duration-300  h-full bg-slate-200 text-black px-2 rounded-lg" placeholder="ex : action" type="text"></input>

                  <span className="absolute  right-2 text-xl top-1/2 -translate-y-1/2 text-amber-600"><CiSearch /></span>

                </div>
            </div>
            
            
        </section>
    )
}

export default Genre