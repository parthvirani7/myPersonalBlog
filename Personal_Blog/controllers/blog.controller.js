const { blogService } = require("../services");

//ADD

const addBlog = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const blog = await blogService.addBlog(body);

    res.status(201).json({
      message: "blog Created success",
      data: blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//GET
const getBlog = async (req, res) => {
  const blog = await blogService.getBlog();

  console.log(blog, "get");

  res.status(200).json({
    message: "product get success",
    data: blog,
  });
};

//UPDATE
const updateBlog = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      console.log(id, body);

      const blog = await blogService.updateBlog(id, body);

      res.status(200).json({
        message: "blog updated success",
        data: blog,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
  
  

//DELETE
const deleteBlog = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const blog = await blogService.deleteBlog(id);
    if (!blog) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "blog delete success",
      data: blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addBlog, getBlog, updateBlog, deleteBlog };
