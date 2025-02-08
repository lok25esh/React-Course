import { logoUrl } from "../utils/constants";
import { useState } from "react";


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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contactus</li>
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