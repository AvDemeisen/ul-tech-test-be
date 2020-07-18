const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/products');

router.get('/', product_controller.home);
router.get('/products', product_controller.products);
router.get('/products/:type', product_controller.products_by_type);
router.get('/product/:id', product_controller.product_by_id);

module.exports = router;