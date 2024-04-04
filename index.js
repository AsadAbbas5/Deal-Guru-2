require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./controllers/users");
const ProductRoutes = require("./controllers/Products");
const path = require('path');


const app = express();

mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => {
    console.log("database connect successfully");
  })
  .catch((err) => {
    console.log("error.messages", err);
  });

app.use(express.json());
app.use(cors());
app.use("/content", express.static("content/"));
app.use(express.static(path.join(__dirname, '/client/build')));
app.use("/api/user", userRoutes);
app.use("/api/products",ProductRoutes)
//app.use(express.static(path.join(__dirname,'public')))


app.all("*", (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`listening at port 5000`);
});
