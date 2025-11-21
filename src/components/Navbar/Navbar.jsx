import React, { useContext, useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="FoodBasket Logo" className="logo" /></Link>
        <ul className='navbar-menu'>
            <Link to="/" className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</Link>
            <a href="#explore-menu" className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>Menu</a>
            <a href='#app-download' className={menu==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>Mobile-app</a>
            <a href='#footer' className={menu==="contact"?"active":""} onClick={()=>setMenu("contact")}>Contact</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search'/>
            <div className='navbar-search-icon'>
                <Link to="/cart"><img src={assets.basket_icon} alt='cart'/></Link>
                <div className={getTotalCartAmount()===0? "": "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
    </div>
  ) 
}

export default Navbar