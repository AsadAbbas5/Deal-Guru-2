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
Likes:{
  type:Number,
  default:0
},
DisLikes:{
  type:Number,
  default:0
},
hearts:{
  type:Number,
  default:0
}

});
const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
