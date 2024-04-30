const Admin = require("../models/adminModel");
const { v4: uuidv4 } = require("uuid");

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/*exports.getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};*/

exports.getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;

    // If the ID is not "create", proceed with fetching the admin by ID
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.createAdmin = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Add this line for debugging
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/*// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { firstname, lastname, username, password, email } = req.body;

    // Check if all required fields are present
    if (!firstname || !lastname || !username || !password || !email) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }
   

    // Generate a unique ID
    const uniqueId = uuidv4();

    // Combine the unique ID with other fields from the request body
    const newAdmin = new Admin({ id: uniqueId, ...req.body });

    // Save the admin to the MongoDB collection
    await newAdmin.save();

    return res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
  } catch (err) {
    //res.status(400).json({ error: err.message });
    console.error("Error occurred while registering admin:", err); // Log the error for debugging
    return res.status(500).json({ error: "An error occurred while registering admin" });
  }
};*/














exports.updateAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, req.body, {
      new: true,
    });

    if (!updatedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).json(updatedAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.loginAdmin = async (req, res) => {
  try {
   
    const { email, password } = req.body;

    const user = await Admin.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password." });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid email or password." });

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("x-auth-token", token).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};
exports.deleteAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);

    if (!deletedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
