const { adminSchema } = require("../models");

const getAdmin = () => {
  return adminSchema.find();
};
const addAdmin = (body) => {
  return adminSchema.create(body);
};
const findAdmin = (adminEmail) => {
  return adminSchema.findOne({ adminEmail: adminEmail });
};
const getAdminByemail = (adminEmail) => {
  return adminSchema.findOne({ adminEmail });
};
const updateAdmin = (id, body) => {
  return adminSchema.findByIdAndUpdate(id, { $set: body });
};
const deleteAdmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};
module.exports = { addAdmin, findAdmin, getAdmin, getAdminByemail, updateAdmin, deleteAdmin };