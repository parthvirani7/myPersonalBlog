const { createToken, verifyToken } = require("../middlewares/auth");
const { adminService } = require("../services");

//ADD or REGISTER ADMIN

const addAdmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const adminExist = await adminService.getAdminByemail(body.adminEmail);

    if (adminExist) {
      throw new Error("admin already exist");
    }

    const admin = await adminService.addAdmin(body);

    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "admin Created success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN ADMIN
const loginAdmin = async (req, res) => {
  const body = req.body;
  console.log(body);
  const adminEmail = req.body.adminEmail;
  const password = req.body.password;

  const findAdmin = await adminService.findAdmin(adminEmail);
  
  console.log(findAdmin);

  if (!findAdmin) {
    res.status(500).json({
      message: "Admin not found",
    });
  } else {
    if (password === findAdmin.password) {

      const token = createToken(findAdmin);

      res.cookie("login-token",token)

      res.status(200).json({
        message: "login success",
        // data: findAdmin,
      });
    } else {
      res.status(500).json({
        message: "Enter valid password",
      });
    }
  }
};

//GET ADMIN
const getAdmin = async (req, res) => {
  const token = req.cookies["login-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const admin = await verifyToken(token);

  console.log(admin, "admin data");

  res.status(200).json({ message: "admin profile get success", admin });
};

//UPDATE ADMIN
const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const admin = await adminService.updateAdmin(id, body);

    res.status(200).json({
      message: "admin updated success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//DELETE ADMIN
const deleteAdmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const admin = await adminService.deleteAdmin(id);
    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addAdmin, loginAdmin, getAdmin, updateAdmin, deleteAdmin };
