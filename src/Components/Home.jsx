import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(image/hero_1.jpg)" }}
        data-aos="fade"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1>Buy and Sell Real Estate properties</h1>
              <p className="mb-5">
                BLVD Realty Group would love to establish a lasting relationship
                with you and meet all your real estate needs and dreams both now
                and in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
