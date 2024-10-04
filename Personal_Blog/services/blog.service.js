const { blogSchema } = require("../models");

const getBlog = () => {
  return blogSchema.find().populate("admin");
};
const addBlog = (body) => {
  return blogSchema.create(body);
};
const updateBlog = (id, body) => {
  return blogSchema.findByIdAndUpdate(id, { $set: body });
};
const deleteBlog = (id) => {
  return blogSchema.findByIdAndDelete(id);
};
module.exports = { addBlog, getBlog, updateBlog, deleteBlog };
