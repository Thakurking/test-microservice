const token = require("jsonwebtoken");
module.exports = async (req, res) => {
  try {
    const jwt = req.cookies.token;
    console.log(jwt);
    if (!jwt) {
      return res.json({ message: "token not found" });
    }
  } catch (error) {
    return res.json({ message: "Access failed" });
  }
};
