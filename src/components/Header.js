import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbutton,setloginbutton] = useState('login')
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li>Cart</li>
            <button className="button" onClick={()=>{loginbutton==="login" ? setloginbutton("logout") : setloginbutton("login")}}>{loginbutton}</button>
          </ul>

        </div>
      </div>
    );
  };
  export default Header;