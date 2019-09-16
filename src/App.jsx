import React, { Component } from "react";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Listing from "./Components/Listing.jsx";
import AllListings from "./Components/AllListings.jsx";
import Admin from "./Components/Admin.jsx";
import CreateListing from "./Components/CreateListing.jsx";
import Login from "./Components/Login.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Home from "./Components/Home.jsx";
import "./main.css";

let home = () => {
  return (
    <div>
      <Listing />
    </div>
  );
};

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Route path="/allListings" exact component={AllListings} />
          <Route path="/" exact component={Home} />
          <Route path="/createListing" exact component={CreateListing} />
          <Route path="/login" exact component={Login} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/admin" exact component={Admin} />
        </div>
      </BrowserRouter>
    );
  };
}
export default App;
