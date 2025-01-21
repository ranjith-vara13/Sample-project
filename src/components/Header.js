import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from 'react-router';

const Header = () => {

    const[btnNameReact,setBtnNameReact] = useState("Login");

    useEffect(()=>{

    }, [btnNameReact]);
    
    return(
     <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-blue-100"   >
     <div className="logo-container">
     <img className="w-56" src={LOGO_URL}/>
     </div>
     <div className="flex items-center font-bold">
        <ul className="flex p-4 m-4">
            <li className="px-4 " >
           <Link to = "/">Home</Link> 
            </li>

     <li className="px-4">
       <Link to = "/about"> About us</Link>
        </li>
     <li className="px-4">
       <Link to = "/contact" >Contact Us</Link>
        </li>
     <li className="px-4">Cart</li>
     <button  className="login" 
     onClick={()=>{ 
        btnNameReact =="Login" 
        ? setBtnNameReact("Logout") 
        : setBtnNameReact("Login");

     }}>{btnNameReact}</button>
     </ul>
     </div>
     </div>



    );
};
 
export default Header;