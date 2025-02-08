import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
import resObj from "../utils/mockData";


const Body = () => {
    const [list,setList] = useState(resObj)

    const[searchtext,setSearchtext] = useState("");

       
    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData = async () => {
          const data = await fetch("");
          const json = await data.json();
          console.log(json);
    };

   
   
    if(list.length===0){
        return <h1>Loading....</h1>
    }
    return (
        <div className="body">
            
            <div className="filter">

                <div className="serach">
                    <input type="text" className="search-box" value={searchtext}
                    onChange={(e)=>{
                        setSearchtext(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        
                       const filteredData = list.filter(
                        (res)=> {
                          return  res.data.name.toLowerCase().includes(searchtext);

                        }
                       
                       
                       
                    );
                    setList(filteredData)
                    }}>Search</button>

                </div>
                <button className="filter-btn" 
                onClick={()=>{
                        const filteredlist = list.filter(
                            (res)=>res.data.rating>4

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
        <RestaurentCard key={restaurent.data.id} resData={restaurent} />
    ))
}
                       
            </div>
              
        </div>
    )
}

export default Body;