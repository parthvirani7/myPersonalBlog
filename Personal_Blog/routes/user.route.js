const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

const route = express.Router();
route.get("/getuserprofile", userController.getUser);
route.post(
  "/register",
  validate(userValidation.adduser),
  userController.addUser
);
route.post("/login", userController.loginUser);
route.delete("/delete/:id", userController.deleteUser);
route.put(
  "/update/:id",
  validate(userValidation.adduser),
  userController.updateUser
);

module.exports = route;
