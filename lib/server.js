'use strict';

const express = require('express');

const cors = require('cors');

const morgan = require('morgan')


const app = express();
app.use(cors())
app.use(morgan('dev'))

module.exports = {
    server: app,
    start : port=>{
        let PORT = process.env.PORT || port || 3000
        app.listen(PORT,()=>{
            console.log(`listening to the ${PORT}`)
        })
    }
}