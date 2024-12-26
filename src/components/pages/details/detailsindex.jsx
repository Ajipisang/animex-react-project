import { useParams } from "react-router-dom"
import NavBar from "../../ui/navbar";
import HeaderDetails from "../../layout/details/header";
function Details(){
    const params=useParams();
    const id =params.id;
    return(
        <>
        <NavBar></NavBar>
        <div className="w-full h-screen bg-purpleSemiDark">
            <HeaderDetails ></HeaderDetails>
        </div>
        </>
    )
}

export default Details