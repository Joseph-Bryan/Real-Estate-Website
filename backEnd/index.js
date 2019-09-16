const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELOCME AND GOODBYE");
});

const uri = process.env.ATLAS;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected");
});

const propertiesRouter = require("./routes/properties");
app.use("/properties", propertiesRouter);
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
