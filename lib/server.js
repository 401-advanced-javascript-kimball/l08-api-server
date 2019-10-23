'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = require('../router');

// CORS - Cross Origin Resource Sharing

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', categoryRouter);

app.listen(3000, () => console.log('TODO:'))