const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 6060;

app.listen(PORT, () => {
  console.log(`Auth running at ${PORT}`);
});
