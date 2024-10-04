const express = require("express");
const { blogController } = require("../controllers");

const route = express.Router();
route.get("/get", blogController.getBlog);
route.post("/add", blogController.addBlog);
route.delete("/delete/:id", blogController.deleteBlog);
route.put("/update/:id", blogController.updateBlog);

module.exports = route;
