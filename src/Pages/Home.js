import React from "react";
import './Home.scss';
import landingImage from '../../src/assets/images/single_sofa.png';
import coffeeTabel from '../assets/images/coffee_table.png';
import coffeeSofa from '../assets/images/double_sofa.png';


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

    </main>
  )
}

export default Home;