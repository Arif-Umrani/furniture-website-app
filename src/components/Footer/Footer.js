import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <div className="container">
      <div class="row">
        <div className="col-sm-12 col-md-4 col-lg-4 footer-address">
          <p>400 University Drive Suite 200 Coral Gobles,</p>
          <p>FL 331334 USA</p>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 footer-link d-flex flex-column">
          <p class="footer-title">Links</p>
          <a href="#!" className="mt-4">Home</a>
          <a href="#!" className="mt-4">Shop</a>
          <a href="#!" className="mt-4">About</a>
          <a href="#!" className="mt-4">Contact</a>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 footer-link d-flex flex-column">
          <p class="footer-title">Help</p>
          <a href="#!" className="mt-4">Payment Options</a>
          <a href="#!" className="mt-4">Returns</a>
          <a href="#!" className="mt-4">Privacy Policies</a>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 footer-link d-flex flex-column">
          <p class="footer-title">Newsletter</p>
          <label htmlFor="email"></label>
          <input type="email" class="border-0 mt-4 footer-link text-decoration-underline" placeholder="Enter Email ID" />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 footer-link d-flex flex-column">
          <p className="footer-title"></p>
          <a href="#!" class="mt-5 p-0 disabled black-underline">Subscribe</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;