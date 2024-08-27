import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  
  const onlineStatus = useOnlineStatus();
  const [loginbutton,setloginbutton] = useState('login')
    return (
      <div className="flex justify-between bg-gray-100 shadow-lg">
        <div className="w-48">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex px-8">
            <li className="px-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
            <li className="p-2 border-b-2 border-gray-400 rounded-md shadow-md   mx-2"><Link className="px-8" to='/'>Home</Link></li>
            <li className="p-2 border-b-2 border-gray-400 rounded-md shadow-md   mx-22"><Link to='/contact'>Contact Us</Link></li>
            <li className="p-2 border-b-2 border-gray-400 rounded-md shadow-md   mx-2"><Link to='/about'>About Us</Link></li>
            <li className="p-2 border-b-2 border-gray-400 rounded-md shadow-md   mx-2"><Link to='/cart'>Cart - {cartItems.length} Items</Link></li>
            <button className="p-2 border-2 border-gray-400 rounded-md shadow-md bg-yellow-400  mx-2" onClick={()=>{loginbutton==="login" ? setloginbutton("logout") : setloginbutton("login")}}>{loginbutton}</button>
            
          </ul>

        </div>
      </div>
    );
  };
  export default Header;