import React from "react";
import './Shop.scss';

// Shop Banner Section logo
import shopLogo from '../assets/icons/shop_logo.png';

// Shop Info Section Icons
import filterSetting from '../assets/icons/volSet_icon.png';
import fourDots from '../assets/icons/4dots_shop_icon.png';
import screenLine from '../assets/icons/icon3_shop.png';

// Shop Items Section Images
import picksSofa from '../assets/images/sofa1_toppick.png';
import picksDining from '../assets/images/dining_toppick.png';
import picksStool from '../assets/images/stool_toppick.png';
import picksMirror from '../assets/images/mirror_toppick.png';
import shopItem5 from '../assets/images/shop_item5.png';
import shopItem6 from '../assets/images/shop_item6.png';
import shopItem7 from '../assets/images/shop_item7.png';
import shopItem8 from '../assets/images/shop_item8.png';
import shopItem9 from '../assets/images/shop_item9.png';
import shopItem10 from '../assets/images/shop_item10.png';
import shopItem11 from '../assets/images/shop_item11.png';
import shopItem12 from '../assets/images/shop_item12.png';
import shopItem13 from '../assets/images/shop_item13.png';
import shopItem14 from '../assets/images/shop_item14.png';
import shopItem15 from '../assets/images/shop_item15.png';
import shopItem16 from '../assets/images/shop_item16.png';

function Shop() {
  return (
    <main>
      {/* Shop Banner Section */}
      <section className="shop-banner-section">
        <div className="container">
          <img src={shopLogo} alt="shop logo" />
          <h2>Shop</h2>
          <p><span className="fw-bold">Home &gt; </span>Shop</p>
        </div>
      </section>

      {/* Shop Info Section */}
      <section className="shop-info-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-5">
              <p>
                <img src={filterSetting} alt="filter setting icon" />
                Filter
                <img src={fourDots} alt="four dots square" />
                <img src={screenLine} alt="screen line icon" />
                <span className="border-start border-dark ps-4">Showing 1-16 of 32 results</span>
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 mt-5">
              <p>Show
                <button>16</button>
                Sort By
                <button>Default</button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Items Section */}
      <section className="shop-items-section">
        <div className="container">
          {/* Shop Item Section - Row 1 */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <img src={picksSofa} alt="sofa" />
              <p>Trenton modular sofa_3</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={picksDining} alt="dining table" />
              <p>Granite dining table & dining chair</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={picksStool} alt="stool set" />
              <p>Outdoor bar table and stool</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={picksMirror} alt="mirror set" />
              <p>Plain console with teak mirror</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
          </div>
          {/* Shop Item Section - Row 2 */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <img src={shopItem5} alt="sofa" />
              <p>Trenton modular sofa_3</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem6} alt="dining table" />
              <p>Granite dining table & dining chair</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem7} alt="stool set" />
              <p>Outdoor bar table and stool</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem8} alt="mirror set" />
              <p>Plain console with teak mirror</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
          </div>
          {/* Shop Item Section - Row 3 */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <img src={shopItem9} alt="sofa" />
              <p>Trenton modular sofa_3</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem10} alt="dining table" />
              <p>Granite dining table & dining chair</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem11} alt="stool set" />
              <p>Outdoor bar table and stool</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem12} alt="mirror set" />
              <p>Plain console with teak mirror</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
          </div>
          {/* Shop Item Section - Row 4 */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <img src={shopItem13} alt="sofa" />
              <p>Trenton modular sofa_3</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem14} alt="dining table" />
              <p>Granite dining table & dining chair</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem15} alt="stool set" />
              <p>Outdoor bar table and stool</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={shopItem16} alt="mirror set" />
              <p>Plain console with teak mirror</p>
              <h4 className="fw-bold">Rs.25.000.00</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Suppot Section */}
      <section className="customer-support-section">
        <div className="container">
          <div className="row customer-support-row text-start mt-5">
            <div className="col-sm-12 col-lg-4">
              <h3>Free Delivery</h3>
              <p className="text-mute">For all orders over $50, consectur adipim scing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h3>90 Days Return</h3>
              <p className="text-mute">If goods have problems, consetetur adipim scing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h3>Secure Payment</h3>
              <p className="text-mute">100% secure payments, consectur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop;