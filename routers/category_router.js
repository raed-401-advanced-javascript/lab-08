'use strict';

const express = require('express')

const router = express().Router

const category_model = require('../models/category/category_model');

router.get('/category',handlerGet)
router.post('/category',handlerPost)
router.put('/category:id',handlerUpdate)
router.delete('category:id',handleDelete)
