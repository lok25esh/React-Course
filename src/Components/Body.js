import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {
    const [list,setList] = useState([])

    const[searchtext,setSearchtext] = useState("");

       
    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
        //   console.log(json);
        
        //   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // data.cards[4].card.card.gridElements.infoWithStyle.restaurants
   //data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cloudinaryImageId
   //[0].info.name
//    [0].info.avgRating
   
    if(list.length===0){
        return <h1>Loading....</h1>
    }
    return (
        <div className="body">
            
            <div className="filter">

                <div className="serach">
                    <input type="text" className="search-box" value={searchtext}
                    onChange={(e)=>{
                        setSearchtext(e.target.value.toLocaleLowerCase())
                    }}/>
                    <button onClick={()=>{
                        
                       const filteredData = list.filter(
                        (res)=> {
                          return  res.info.name.toLowerCase().includes(searchtext);

                        }
                       
                       
                       
                    );
                    setList(filteredData)
                    }}>Search</button>

                </div>
                <button className="filter-btn" 
                onClick={()=>{
                        const filteredlist = list.filter(
                            (res)=>res.info.avgRating>4

                        );
                     setList(filteredlist);
                }
                    
                }> Top Rated Restaurents </button>
            </div>
            <div className="res-container">
                {/* //Here we will add another component  */}
                {/* //Restaurantcard will build as new component*/}
                {/* <RestaurentCard name="Meghana foods" cusines="Biriyani" avgTime="30" rating ="4"/>   *here are we ar passing the props as an arguments these will be passed to the restaurent component as a object  */}
                {/* <RestaurentCard resData={resObj[0]}/>   *Instead of typing all the values we can directly pass the resData here res data is goes into another object so we need to destructuring   */}
                {/* <RestaurentCard resData={resObj[1]}/>   *Instead of typing all the values we can directly pass the resData here res data is goes into another object so we need to destructuring   */}
                {/* <RestaurentCard resData={resObj[2]}/> */}
                {/* <RestaurentCard resData={resObj[3]}/>  */}

                {/* lets add looping so that we no need to write again and again */}

                {
    list.map((restaurent) => (
      <Link key={restaurent.info.id} to={"/restaurentmenu/"+restaurent.info.id}>  <RestaurentCard  resData={restaurent} /></Link>
    ))
}
                       
            </div>
              
        </div>
    )
}

export default Body;