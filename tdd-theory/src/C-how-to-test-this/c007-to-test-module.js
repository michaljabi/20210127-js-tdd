const { time } = require( './c007-time-module' )

module.exports = {
	shoutBannerFor(product, price) {
		return `Welcome, today's (${time()}) promotion is: ${product} for ${price}`;
	}
}
