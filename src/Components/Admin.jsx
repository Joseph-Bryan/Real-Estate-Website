import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Admin extends Component {
  state = {
    properties: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/properties/")
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.setState({
          properties: JSON.parse(data)
        });
      });
  }

  onDelete = (event, id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/properties/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        properties: this.state.properties.filter(property => {
          return property._id !== id;
        })
      });
    });
  };

  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <div>
          <button type="button" className="btn btn-primary">
            <Link to="/createListing" style={{ color: "white" }}>
              Add New Listing
            </Link>
          </button>
        </div>
        <div style={{ paddingTop: 20 }}>
          {this.state.properties.length < 1 ? (
            "There are no listings"
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Bedrooms</th>
                  <th scope="col">Bathrooms</th>
                  <th scope="col">Area</th>
                  <th scope="col">Address</th>
                  <th scope="col">Description</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.properties.map(property => {
                  return (
                    <tr key={property._id}>
                      <td>
                        <img
                          src={"image/" + property.image}
                          alt=""
                          className="img-thumbnail"
                          style={{ width: 100, height: 100 }}
                        />
                      </td>
                      <td>{property.price}</td>
                      <td>{property.bedrooms}</td>
                      <td>{property.bathrooms}</td>
                      <td>{property.area} SQFT</td>
                      <td>
                        {property.houseNumber} {property.street} {property.city}{" "}
                        {property.province} {property.postalCode}
                      </td>
                      <td>{property.description}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          style={{ width: 80 }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => this.onDelete(this, property._id)}
                          style={{ width: 80 }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default Admin;

// admin page needs to view all listings
//should be able to delete or update and add
