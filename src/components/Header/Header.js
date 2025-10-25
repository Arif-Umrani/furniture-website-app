import React from "react";
import './Header.scss'
import alertIcon from '../../assets/icons/account_alert.png'
import searchIcon from '../../assets/icons/icons_search.png';
import heartIcon from '../../assets/icons/icons_heart.png';
import cartIcon from '../../assets/icons/shopping_cart.png';


function Header() {
  return (
    // Nav-Bar
    <div className="container header">
      <div className="nav-bar">
        <div className="nav-items d-flex">
          <a href="#!" className="nav-link">Home</a>
          <a href="#!" className="nav-link">Shop</a>
          <a href="#!" className="nav-link">About</a>
          <a href="#!" className="nav-link">Contact</a>
        </div>
        <div className="nav-icon">
          <img src={alertIcon} alt="home alert icon" />
          <img src={searchIcon} alt="search icon" />
          <img src={heartIcon} alt="heart icon" />
          <img src={cartIcon} alt="cart icon" />
        </div>
      </div>
    </div>
  )
}

export default Header;