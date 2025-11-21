import {React, useState }from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/Placeorder/PlaceOrder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';

function App() {
 
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
