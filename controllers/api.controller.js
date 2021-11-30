const products = require('../models/products.model');
const logger = require('../utils/logging');

const apiController = {

    async all(req, res) {

		try {
			const getProducts = await products.findAll();

			if (getProducts) {
				return res.status(404).json({
					products: getProducts,
					errorMessage: 'No products found'
				});
			}
	
			res.status(200).json({
				products: getProducts,
			});
		} catch ( e ) {
			logger.error(e.message);
		}

    }

};

module.exports = apiController;