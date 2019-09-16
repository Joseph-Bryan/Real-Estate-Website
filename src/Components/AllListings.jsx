import React, { Component } from "react";
import Property from "./Property.jsx";

class AllListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/properties")
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.setState({
          properties: JSON.parse(data)
        });
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.properties.map(property => {
              return <Property key={property._id} property={property} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AllListings;
