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

// Blog Icon Image
import teaBook from '../assets/images/book_tea_blog.png';
import laptopBlog from '../assets/images/laptop_blog.png';
import workstationBlog from '../assets/images/workstation.png';
// Blog Icons
import clockIcon from '../assets/icons/clock_icon.png';
import calendarIcon from '../assets/icons/calender_blog.png';


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

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h3 className="sub-title mt-5 mb-3">Our Blogs</h3>
          <p className="text-mute mb-4">Find a bright ideal to suit your taste with our great selection.</p>
          <div className="row justify-content-between mt-5">
            <div className="col-lg-4">
              <img src={teaBook} className="blog-img" alt="tea and book" />
              <p className="mt-4">Going all-in with millenial design</p>
              <h4 className="underline-links fw-bold m4-5 mb-4">Read More</h4>
              <div className="icon-container">
                <p className="pb">
                  <img src={clockIcon} className="me-2" alt="clock icon" />
                  5 min
                </p>
                <p>
                  <img src={calendarIcon} className="me-2" alt="calendar icon" />
                  12th Oct 2025</p>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={laptopBlog} className="blog-img" alt="laptop" />
              <p className="mt-4">Going all-in with millenial design</p>
              <h4 className="underline-links fw-bold mt-4 mb-4">Read More</h4>
              <div className="icon-container">
                <p className="pb">
                  <img src={clockIcon} className="me-2" alt="clock icon" />
                  5 min
                </p>
                <p>
                  <img src={calendarIcon} className="me-2" alt="calendar icon" />
                  12th Oct 2025</p>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={workstationBlog} className="blog-img" alt="laptop work-station" />
              <p className="mt-4">Going all-in with millenial design</p>
              <h4 className="underline-links fw-bold mt-4 mb-4">Read More</h4>
              <div className="icon-container mb-5">
                <p className="pb">
                  <img src={clockIcon} className="me-2" alt="clock icon" />
                  5 min
                </p>
                <p>
                  <img src={calendarIcon} className="me-2" alt="calendar icon" />
                  12th Oct 2025</p>
              </div>
            </div>
          </div>
          <h4 className="underline-links mt-5 mb-5">View More</h4>
        </div>
      </section>





    </main>
  )
}

export default Home;