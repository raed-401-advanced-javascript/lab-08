'use strict';

const mongoose  = require('mongoose');

const product = mongoose.Schema({
    price:{type:Number , required:true},
    weghit :{type:Number},
    quantity_in_stock:{type:Number,required:true},
})  

module.exports = mongoose.model('product',product)