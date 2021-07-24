const token = require("jsonwebtoken");
module.exports = async (req, res) => {
  const jwt = req.cookies.token;
  console.log(jwt);
  if (!jwt) {
    return res.json({ message: "token not found" });
  } else {
    return res.json({ message: "Please Provide Token" });
  }
};
