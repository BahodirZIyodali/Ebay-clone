import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {FiShoppingCart}from 'react-icons/fi'
import { Link } from 'react-router-dom'
const TopNavbar = ({registeredEmail}) => {

  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-center ' >
        
        <div className='d-flex gap-2 '>
       
        {registeredEmail  ? (
        <div >
              <p>Hi {registeredEmail}!</p>
            <button onClick={handleRefreshClick} className="btn btn-danger">
            Log out
         </button>
        </div>
          ) : (
            <>
              <p>Hi!</p>
              <Link to='login'>Sign in</Link>
              <span>or</span>
              <Link to='register'>register</Link>
            </>
          )}
          <ul className=" d-flex gap-3 align-center  ">
          <li className="nav-item active">
            <a className="nav-link" href="#">Daily Deals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Brand Outlet</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help & Contact</a>
          </li>
        </ul>
        </div>
       
        <div className='d-flex gap-2 '>
         <span>Sell</span>
         <span>Watchlist</span>
         <span>My eBay</span>
          <div className='mx-3 d-flex gap-2 '>
          <Link to="/like" className="text-black" ><AiOutlineLike size={20}/></Link>
          <Link to="/cart" className="text-black" ><FiShoppingCart size={20} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar