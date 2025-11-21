import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className='Header'>
        <div className="Header-contents">
            <h1>Welcome to FoodBasket</h1>
            <p>Your one-stop solution for delicious meals delivered to your doorstep.</p>
            <button>Order Now</button>
        </div>
    </div>
  )
}

export default Header