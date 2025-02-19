import { logoUrl } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

//*Lets create header component where Logo components and nav items will be in it 
const Header = () => {
const [loginBtn,setLogin] = useState("Login");
const onlinestatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2" >
            <div className="logo-container">
                <img className="w-56" src={logoUrl}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status : {onlinestatus ? "✅" : "❌"  }</li>

                    <li className="px-4">
                       <Link to="/">homepage</Link>
                        </li>

                    <li className="px-4">
                    <Link to="/about">About</Link> 
                        </li>
                    <li className="px-4">
                      <Link to="/contactus">Contactus</Link>  
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="" onClick={()=>{
                loginBtn === "Login"?setLogin("Logout"):setLogin("Login");
                

            }} >{loginBtn}</button>
                </ul>
    

            </div>
            
            
            
        </div>
    )
}

export default Header;