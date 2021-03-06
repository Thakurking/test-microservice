const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 9090;
const mongoose = require("mongoose");
const Order = require("./Order");
const amqp = require("amqplib");
const auth = require("../auth-service/auth");
// var channel, connection;

mongoose.connect(
  "mongodb://localhost/order-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`Order-Service DB Connected`);
  }
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("hii aws");
app.get("/order/product/:firstName/:lastName", auth, async (req, res) => {
  console.log(req.params);
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;
  console.log(firstName, lastName);
  return res.json({ firstName, lastName });
  // return res.send("hii from order");
});
// function createOrder(products, userEmail) {
//     let total = 0;
//     for (let t = 0; t < products.length; ++t) {
//         total += products[t].price;
//     }
//     const newOrder = new Order({
//         products,
//         user: userEmail,
//         total_price: total,
//     });
//     newOrder.save();
//     return newOrder;
// }

// async function connect() {
//     const amqpServer = "amqp://localhost:5672";
//     connection = await amqp.connect(amqpServer);
//     channel = await connection.createChannel();
//     await channel.assertQueue("ORDER");
// }
// connect().then(() => {
//     channel.consume("ORDER", (data) => {
//         console.log("Consuming ORDER service");
//         const { products, userEmail } = JSON.parse(data.content);
//         const newOrder = createOrder(products, userEmail);
//         channel.ack(data);
//         channel.sendToQueue(
//             "PRODUCT",
//             Buffer.from(JSON.stringify({ newOrder }))
//         );
//     });
// });

app.listen(PORT, () => {
  console.log(`Order-Service at ${PORT}`);
});
