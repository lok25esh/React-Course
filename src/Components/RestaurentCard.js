
import { resURL } from "../utils/constants";
//*creating a restaurent card component 
//!Optional chainig -->a JavaScript feature that prevents runtime errors when trying to access a property on undefined or null.
const RestaurentCard = (props) => {    
    {/** here props are taken as an object  */}
    const {resData} = props; //Here we are doing destructuring othere wise we need to write props.resdata.name after destructuring resdata.name {resdata is another object by desctructing we can directly acces the values in brackets }
    const{name,cloudinaryImageId,sla,cuisines,avgRating} = resData?.info; {/**here is inside resdata so we have written resData.data  */}
   
    // const deliveryTime = resData?.info?.sla?.deliveryTime;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src= {resURL+cloudinaryImageId} />
            <h3>{name}</h3>  {/**now we can directly write name as we destructured it  */}
            <h4>{cuisines?.join(", ")}</h4>
            <h4> {sla?.slaString} seconds</h4>
            <h4>{avgRating} rating</h4>
        </div>
    )
}

export default RestaurentCard;