var Type = require('../models/types');


exports.types = (req, res) => {
    Type.find((err, type) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(type);
    })
};

