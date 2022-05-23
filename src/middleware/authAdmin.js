const User = require("../db/models/User");

const authAdmin = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ _id: req.body.user.id });

    if (user.role !== 1)
      return res.status(500).json({ msg: "Admin resources access denied." });

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
