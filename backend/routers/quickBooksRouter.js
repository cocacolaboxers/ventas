const express = require('express')
const router = new express.Router()

const qbo = require('../qb');

//Get customers list
router.get('/customers', (req, res) => {
    qbo.findCustomers(
		{
			fetchAll: true,
		},
		function (e, customers) {
			res.json(customers.QueryResponse);
		}
	);
});

//Get a single customer's info
router.get('/customers/:id', (req,res) => {
    qbo.getCustomer(req.params.id, 
        function (e, customer) {
		res.json(customer);
	});
})

//Get all articles
router.get('/articles', (req,res) => {
    qbo.findItems(
        {
            fetchAll: true,
        },
        function (e, item) {
            res.json(item.QueryResponse);
        }
    );
})


module.exports = router
