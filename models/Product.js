const express = require("express");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductTitle: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
   
    
  },
  productImage: {
    type: String
},
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
