import React, { Component } from "react";
import axios from "axios";

class CreateListing extends Component {
  state = {
    image: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    houseNumber: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    description: ""
  };

  constructor() {
    super();
    this.imageName = React.createRef();
  }
  handleChange = event => {
    if (event.target.name === "image") {
      this.setState({
        [event.target.name]: this.imageName.current.files[0].name
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = async event => {
    const {
      image,
      price,
      bedrooms,
      bathrooms,
      area,
      houseNumber,
      street,
      city,
      province,
      postalCode,
      description
    } = this.state;
    event.preventDefault();
    // console.log(this.state);
    let property = {
      image: image,
      price: price,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      houseNumber: houseNumber,
      street: street,
      city: city,
      province: province,
      postalCode: postalCode,
      description: description,
      area: area
    };

    axios.post("http://localhost:3000/properties/add", property).then(res => {
      console.log(res.data);
      alert("Property Added");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={this.handleChange}
            ref={this.imageName}
          />{" "}
          <br />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="houseNumber"
            placeholder="HouseNumber"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="street"
            placeholder="Street"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleChange}
          />{" "}
          <br />
          <select name="province" onChange={this.handleChange}>
            <option value="British Colombia">British Colombia</option>
            <option value="Quebec">Quebec</option>
            <option value="Manitoba">Manitoba</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Alberta">Alberta</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
          </select>{" "}
          <br />
          <input
            type="text"
            name="postalCode"
            placeholder="PostalCode"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="area"
            placeholder="Area"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
          />{" "}
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateListing;
