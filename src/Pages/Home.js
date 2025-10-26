import React from "react";
import './Home.scss';

// Landing Banner Image
import landingImage from '../../src/assets/images/single_sofa.png';

// Coffee Sitting Section Images
import coffeeTabel from '../assets/images/coffee_table.png';
import coffeeSofa from '../assets/images/double_sofa.png';

// Top Picks Section Images
import picksSofa from '../assets/images/sofa1_toppick.png';
import picksDining from '../assets/images/dining_toppick.png';
import picksStool from '../assets/images/stool_toppick.png';
import picksMirror from '../assets/images/mirror_toppick.png';

// New Arrival Section Images
import sofaSet from '../assets/images/newArival_set.png';



function Home() {
  return (
    <main>
      {/* Landing Banner */}
      <section className="landing-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Rocket single  <br /> seater</h2><br />
              <h4 className="underline-links">Shop Now</h4>
            </div>
            <div className="col-lg-6">
              <img src={landingImage} alt="Sofa" />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Sitting Section  */}
      <section className="coffee-sitting-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 coffee-cols">
              <div className="mb-5">
                <h3 className="sub-title">Side Table</h3>
                <h4 className="underline-links mt-4">View More</h4>
              </div>
              <img src={coffeeTabel} className="cof" alt="coffee table" />
            </div>
            <div className="col-lg-6 coffee-cols">
              <div className="mb-5">
                <h3 className="sub-title">Side Table</h3>
                <h4 className="underline-links mt-4">View More</h4>
              </div>
              <img src={coffeeSofa} alt="coffee sofa" />
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="top-picks-section">
        <div className="container">
          <h3 className="sub-title mt-5">Top Picks For You</h3>
          <p className="text-mute">Find a bright ideal to suit your taste with our great selection of suspension,
            floor and table lights.
          </p>
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
          <h4 className="underline-links mt-5 mb-5">View More</h4>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="new-arrival-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <img src={sofaSet} alt="sofa set" />
            </div>
            <div className="col-lg-5">
              <h4 className="fw-bold">New Arrivals</h4>
              <h2 className="fw-bold">Asgaard sofa</h2>
              <button className="mt-4">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default Home;