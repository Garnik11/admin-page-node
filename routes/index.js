const express = require('express');
const router = express.Router();

const prodRouter = require('./product_routes')
const categoryRouter = require('./category_routes')

router.use(prodRouter,categoryRouter)








module.exports = router