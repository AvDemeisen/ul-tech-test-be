var Product = require('../models/products');

exports.home = (req, res) => res.send('ul-tech-test-be');

exports.products = (req, res) => {
    Product.find((err, products) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(products);
    })
};

exports.products_by_type = (req, res) => {
    Product.find({type: req.params.type}, (err, products) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(products);
    });
};

exports.product_by_id = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err);
        res.send(product);
    })
};
