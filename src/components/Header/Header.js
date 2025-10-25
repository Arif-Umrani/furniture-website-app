import React from "react";
import './Header.scss'
import alertIcon from '../../assets/icons/account_alert.png'
import searchIcon from '../../assets/icons/icons_search.png';
import heartIcon from '../../assets/icons/icons_heart.png';
import cartIcon from '../../assets/icons/shopping_cart.png';


function Header() {
  return (
    <header className="header">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light position-relative">
          <div class="container d-flex icon-nav flex-md-row-reverse">
            <div class="d-flex gap-4">
              <a href="#!"><img src={alertIcon} alt="home alert icon" /></a>
              <a href="#!"><img src={searchIcon} alt="search icon" /></a>
              <a href="#!"><img src={heartIcon} alt="heart icon" /></a>
              <a href="#!"><img src={cartIcon} alt="cart icon" /></a>
            </div>
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#textNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse text-nav" id="textNavbar">
                <ul class="navbar-nav d-flex">
                  <li class="nav-item">
                    <a class="nav-link" href="#!">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

  )
}







// Nav-Bar
//  <div className="container header">
//       <div className=" nav-bar">
//         <div className="nav-items d-flex">
//           <a href="#!" className="nav-link">Home</a>
//           <a href="#!" className="nav-link">Shop</a>
//           <a href="#!" className="nav-link">About</a>
//           <a href="#!" className="nav-link">Contact</a>
//         </div>
//         <div className="nav-icon">
//           <img src={alertIcon} alt="home alert icon" />
//           <img src={searchIcon} alt="search icon" />
//           <img src={heartIcon} alt="heart icon" />
//           <img src={cartIcon} alt="cart icon" />
//         </div>
//       </div>
//     </div>


export default Header;