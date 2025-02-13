import { logoUrl } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

//*Lets create header component where Logo components and nav items will be in it 
const Header = () => {
const [loginBtn,setLogin] = useState("Login");
    return (
        <div className="header" >
            <div className="logo-container">
                <img className="logo" src={logoUrl}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       <Link to="/">homepage</Link>
                        </li>

                    <li>
                    <Link to="/about">About</Link> 
                        </li>
                    <li>
                      <Link to="/contactus">Contactus</Link>  
                    </li>
                    <li>Cart</li>
                </ul>
    

            </div>
            
            <button className="btn" onClick={()=>{
                loginBtn === "Login"?setLogin("Logout"):setLogin("Login");
                

            }} >{loginBtn}</button>
            
        </div>
    )
}

export default Header;