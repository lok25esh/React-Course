import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurentMenu = () => {

    // const[resInfo,setresInfo] = useState(null);
    const {resID} = useParams();
    // console.log(resID);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //      const data = await fetch(MENU_API+resID);
    //      const jsondata = await data.json();

    //      console.log(jsondata);
    //      setresInfo(jsondata);
    // }
const resInfo = useRestaurentMenu(resID);

if(resInfo===null){
    return (
        <h1>Loading...</h1>
    )
}
 const {costForTwoMessage,id,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
 const{itemCards} =  resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
//  console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
//  console.log(itemCards);
    return (
        <div className="menu">
            <h1>{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
            <h1>{cuisines}</h1>
            <h2>{costForTwoMessage}</h2> 
            {/* {console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards[0].card.info.name)} */}
            <h2>Menu</h2>
            <ul>
             {itemCards.map(items => <li key={items.card.info.id}>{items.card.info.name} - {items.card.info.price/100} Rs</li>)}

            </ul>
        </div>
    );
};

export default RestaurentMenu;