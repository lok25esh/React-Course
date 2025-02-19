import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurentMenu = (resID)=>{

    const[resInfo,setResInfo] = useState(null);
    //fetchData

    useEffect(()=>{

        fetchData();
    },[]);

    const fetchData = async ()=>{
      const data = await fetch (MENU_API+resID);
      const jsondata = await data.json();
      setResInfo(jsondata);
    }
    return resInfo;
}

export default useRestaurentMenu;