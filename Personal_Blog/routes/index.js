const express = require("express");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const blogRoute = require("./blog.route");

const route = express.Router();

route.use("/user", userRoute);
route.use("/admin", adminRoute);
route.use("/blog", blogRoute);

module.exports = route;
