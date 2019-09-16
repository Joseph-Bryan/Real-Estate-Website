const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    price: {
      type: Number,
      required: true
    },
    bedrooms: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    },
    area: {
      type: Number,
      required: true
    },
    houseNumber: {
      type: Number,
      required: true
    },
    street: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    province: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
