require("dotenv").config();

const http = require("http");
const route = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./db/dbConnect");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookie
app.use(cookieParser());

//routes
app.use("/v1", route);

//database connection
connectDB();
// 
app.set("view engine", "ejs");
// 
app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.get("/loginadmin", (req, res) => {
  res.render("./loginadmin.ejs");
});

app.get("/registeradmin", (req, res) => {
  res.render("./registeradmin.ejs");
});

app.get("/loginuser", (req, res) => {
  res.render("./loginuser.ejs");
});

app.get("/registeruser", (req, res) => {
  res.render("./registeruser.ejs");
});
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started successs on port 1004");
});
