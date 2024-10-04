const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find();
};
const addUser = (body) => {
  return userSchema.create(body);
};
const findUser = (email) => {
  return userSchema.findOne({ email: email });
};
const getuserByemail = (email) => {
  return userSchema.findOne({ email });
};
const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
};
const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};
module.exports = { addUser, findUser, getUser, getuserByemail, updateUser, deleteUser };
