const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");

const route = express.Router();
route.get("/getprofile", adminController.getAdmin);
route.post("/register",validate(adminValidation.addadmin),adminController.addAdmin
);
route.post("/login", adminController.loginAdmin);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put("/update/:id",validate(adminValidation.addadmin),
  adminController.updateAdmin
);
module.exports = route;
