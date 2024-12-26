import { useParams } from "react-router-dom"
import NavBar from "../../ui/navbar";
import HeaderDetails from "../../layout/details/header";
import BodyDetails from "../../layout/details/body";
function Details(){
    const params=useParams();
    const id =params.id;
    return(
        <>
        <NavBar></NavBar>
        <div className="w-full h-auto pb-[100px] bg-purpleSemiDark">
            <HeaderDetails ></HeaderDetails>
            <div className="mt-[280px]">
            <BodyDetails></BodyDetails>
            </div>
        </div>
        </>
    )
}

export default Details