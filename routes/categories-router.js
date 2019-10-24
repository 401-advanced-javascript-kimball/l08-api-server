'use strict';

const express = require('express');
const categoryRouter = express.Router();

const Categories = require('../models/categories-model');
const categories = new Categories;

categoryRouter.get('/categories', handleGet);

categoryRouter.get('categories/:categoryId', handleGet);

function handleGet(req, res, next) {
  let filter = {};
  if (req.param.categoryId) {
    filter.id = req.params.categoryId;
  }

  categories.get(filter);
}

