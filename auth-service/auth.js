const token = require("jsonwebtoken");
module.exports = async (req, res) => {
  const firstName = req.params.firstName;
  console.log(req.params.firstName);
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
