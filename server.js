let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");

reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

// app.post("/login", upload.none(), (req, res) => {
//   console.log("**** I'm in the login endpoint");
//   console.log("this is the parsed body", req.body);
//   let username = req.body.username;
//   let enteredPassword = req.body.password;
//   let expectedPassword = passwords[username];
//   console.log("expected password", expectedPassword);
//   if (enteredPassword === expectedPassword) {
//     console.log("password matches");
//     let sessionId = generateId();
//     console.log("generated id", sessionId);
//     sessions[sessionId] = username;
//     res.cookie("sid", sessionId);
//     res.send(JSON.stringify({ success: true }));
//     return;
//   }
//   res.send(JSON.stringify({ success: false }));
// });
// let generateId = () => {
//   return "" + Math.floor(Math.random() * 100000000);
// };

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
