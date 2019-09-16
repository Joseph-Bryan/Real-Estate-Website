const router = require("express").Router();
const multer = require("multer");
let Property = require("../models/property.model");
const upload = multer();

router.route("/").get((req, res) => {
  Property.find()
    .then(properties => res.json(properties))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const price = Number(req.body.price);
  const bedrooms = Number(req.body.bedrooms);
  const bathrooms = Number(req.body.bathrooms);
  const area = Number(req.body.area);
  const houseNumber = Number(req.body.houseNumber);
  const street = req.body.street;
  const city = req.body.city;
  const province = req.body.province;
  const postalCode = req.body.postalCode;
  const description = req.body.description;
  const image = req.body.image;

  const newProperty = new Property({
    price,
    bedrooms,
    bathrooms,
    area,
    houseNumber,
    street,
    city,
    province,
    postalCode,
    description,
    image
  });

  newProperty
    .save()
    .then(() => res.json("Property added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Property.findById(req.params.id)
    .then(Property => res.json(Property))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Property.findByIdAndDelete(req.params.id)
    .then(() => res.json("Property deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Property.findById(req.params.id)
    .then(Property => {
      Property.price = Number(req.body.price);
      Property.bedrooms = Number(req.body.bedrooms);
      Property.bathrooms = Number(req.body.duration);
      Property.area = Number(req.body.area);
      Property.houseNumber = Number(req.body.houseNumber);
      Property.street = req.body.street;
      Property.city = req.body.city;
      Property.province = req.body.province;
      Property.postalCode = req.body.postalCode;
      Property.description = req.body.description;

      Property.save()
        .then(() => res.json("Property updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
