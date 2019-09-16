import React, { Component } from "react";

class Property extends Component {
  render() {
    const {
      price,
      bedrooms,
      bathrooms,
      area,
      houseNumber,
      street,
      city,
      province,
      postalCode,
      image
    } = this.props.property;
    return (
      <>
        {/* <h1>{this.props.property.price}</h1> */}
        <div className="col-4" style={{ paddingTop: "20px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={"image/" + image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">$ {price}</h5>
              <ul
                className="list-group list-group-flush"
                style={{ paddingBottom: "20px" }}
              >
                <li className="list-group-item">Beds: {bedrooms}</li>
                <li className="list-group-item">Baths: {bathrooms}</li>
                <li className="list-group-item">Area: {area} SRFT</li>
                <li className="list-group-item">
                  Address: {houseNumber} {street} {city} {province} {postalCode}
                </li>
              </ul>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Property;
