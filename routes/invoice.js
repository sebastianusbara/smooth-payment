var express = require('express');
var router = express.Router();

var Xendit = require('xendit-node');

const x = new Xendit({
    secretKey: 'xnd_development_lwaTPRCv9QTmsWUQlRe5knpKhPdaCbRyqlfPy8xEiU5QDGw9BybmdWhzQdBdP',
});

const { Invoice } = x;
const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);

/* GET users listing. */
router.get('/', function(req, res, next) {
    i.createInvoice({
        externalID: 'your-external-id',
        // payerEmail: 'stanley@xendit.co',
        description: 'Invoice for Shoes Purchase',
        amount: 8888,
    }).then((data) => {
        res.json(data);
    });
});

module.exports = router;
