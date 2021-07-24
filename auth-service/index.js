const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 7070;
// const mongoose = require("mongoose");
// const User = require("./User");

// mongoose.connect(
//     "mongodb://localhost/auth-service",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     () => {
//         console.log(`Auth-Service DB Connected`);
//     }
// );

// app.use(express.json());

// app.post("/auth/login", async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.json({ message: "User doesn't exist" });
//     } else {
//         if (password !== user.password) {
//             return res.json({ message: "Password Incorrect" });
//         }
//         const payload = {
//             email,
//             name: user.name
//         };
//         jwt.sign(payload, "secret", (err, token) => {
//             if (err) console.log(err);
//             else return res.json({ token: token });
//         });
//     }
// });

// app.post("/auth/register", async (req, res) => {
//     const { email, password, name } = req.body;
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         return res.json({ message: "User already exists" });
//     } else {
//         const newUser = new User({
//             email,
//             name,
//             password,
//         });
//         newUser.save();
//         return res.json(newUser);
//     }
// });

app.listen(PORT, () => {
  console.log(`Auth-Service at ${PORT}`);
});

// location /admin {

//     root /var/www/html/adm;

// #try_files $uri $uri/ /admin/index.html; # try_files will need to be relative to root

// proxy_pass http://127.0.0.1:9000;
// proxy_http_version 1.1;
// proxy_set_header    Host             $host;
// proxy_set_header    X-Real-IP        $remote_addr;
// proxy_set_header    X-Forwarded-For  $proxy_add_x_forwarded_for;
// proxy_read_timeout 1800;
// proxy_c
