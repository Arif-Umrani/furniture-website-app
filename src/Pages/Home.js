import React from "react";
import './Home.scss';
import landingImage from '../../src/assets/images/single_sofa.png';

function Home () {
  return (
    // Landing Banner Section
    <section className="landing-banner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h2>Rocket single  <br/> seater</h2><br/>
          <h4>Shop Now</h4>
        </div>
        <div className="col-lg-6">
          <img src={landingImage} alt="Sofa" />
        </div>
      </div>
    </div>
    </section>

    
  )
}

export default Home;