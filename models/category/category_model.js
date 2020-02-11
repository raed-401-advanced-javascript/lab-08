'use strict';

const schema = require('./category_schema');

const Model = require('../memory-data-model')

class Category extends Model{
    constructor(){
        super(schema)
    }
}

module.exports = Category