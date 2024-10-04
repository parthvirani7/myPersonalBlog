const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"adminSchema"
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  property: {
    type: String,
    required: true,
    trim: true,
  },
});

const blog = mongoose.model("blogSchema", blogSchema);

module.exports = blog;


