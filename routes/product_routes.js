
const express = require('express');
const prodRouter = express.Router();

const product  = require('../controllers/product_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');

prodRouter.get('/', product.show_all_products )
prodRouter.get('/:id', product.show_one_product )
prodRouter.put('/update/:id',authenticateToken, product.update_product )
prodRouter.post('/newprod',authenticateToken, product.create_product )
prodRouter.delete('/delprod/:id',authenticateToken, product.delete_product )

module.exports = prodRouter

