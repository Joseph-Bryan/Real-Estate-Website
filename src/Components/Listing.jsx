import React, { Component } from "react";
import Property from "./Property.jsx";
import { Link } from "react-router-dom";

class Listing extends Component {
  render() {
    return (
      <div>
        <h1>Listing goes here</h1>
        {/* <Property /> */}
        <Link to="/allListings">View All Listings</Link>
      </div>
    );
  }
}

export default Listing;
