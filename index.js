'use strict';

const server  = require('./lib/server');
const mongoose  = require('mongoose')
const MONGODB_URI = 'mongodb://localhost:27017/lab-08';
const mongooseOption = {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(MONGODB_URI,mongooseOption)
server.start()