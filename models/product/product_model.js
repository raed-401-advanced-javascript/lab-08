'use strict';

const Model = require('../memory-data-model');

const schema = require('./product_schema');

class Product extends Model {
    constructor(){
        super(schema)
    }
}

module.exports = Product