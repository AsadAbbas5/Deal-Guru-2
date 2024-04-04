const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');

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


router.post("/AddProduct", upload.single("productImage"), async (req, res) => {

  try {
    let data = {
      ProductTitle: req.body.ProductTitle,
      productPrice: req.body.productPrice,
    };
    
    if (req.file && req.file.filename) {
      data.productImage = req.file.filename;
    }
    const product = new Product(data);

    await product.save();
    res.status(200).send({
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error occurred while adding product.",
    });
  }
});

router.get("/loadProduct", async (req, res) => {
  try {
    const product = await Product.find(); 

    res.status(200).send({
      success: true,
      product: product
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while fetching products.."
    });
  }
});

module.exports = router;
