const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/products');
const type_controller = require('../controllers/types');

router.get('/', product_controller.home);
router.get('/products', product_controller.products);
router.get('/products/:type', product_controller.products_by_type);
router.get('/product/:id', product_controller.product_by_id);
router.get('/types', type_controller.types);

module.exports = router;