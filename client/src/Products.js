const express = require("express");
const Product = require("../");
const router = express.Router();
const mongoose = require("mongoose");

const multer = require('multer');
const path = require("path");
const fs = require('fs').promises;

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      await fs.mkdir(`content/product/`, { recursive: true });
      cb(null, `content/product/`);
    } catch (err) {
      cb(err, null);
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['jpg', 'png', 'gif', 'bmp', 'jpeg'];
    const ext = path.extname(file.originalname).replace('.', '');
    if (allowedTypes.includes(ext))
      cb(null, true);
    else {
      cb(new Error("File type is not allowed"), false);
    }
  }
})

router.post("/addproduct",   upload.single("productImage"), async (req, res) => {
  try {
    const data = {
        productTitle:req.body.productTitle,
        productPrice:req.body.productPrice,
    };
    if (req.file && req.file.filename) {
      data.productImage = req.file.filename;
    }

    const product = new Product(data);

    await product.save();

    const products = await Product.find();
    res.status(200).send({
      success: true,
      product: products,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/loadProduct", async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).send({
      success: true,
      product: products,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
