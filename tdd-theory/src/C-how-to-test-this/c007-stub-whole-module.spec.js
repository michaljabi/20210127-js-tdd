/**
 * Similar to c005, we can stub any module.
 *
 * Consider example where we always get the actual time (hh:mm:ss)
 *
 * But we do not have dependency for `shoutBannerFor`.
 * It is taking time for other module.
 *
 * For this example - lets pretend we cannot change this behavior and still test it out.
 * */

jest.mock('./c007-time-module', () => ({
	// mock the .time() implementation:
	time: jest.fn(() => '11:02:56')
}));
const { shoutBannerFor } = require( './c007-to-test-module' )

describe('[c007] - how to stub any module', () => {

	it('should present banner with proper text', () => {
		const product = 'tomatoes';
		const price = .99;

		const banner = shoutBannerFor(product, price)

		// We can use only toMatch for that right ?
		// Only time is changing - so it works
		expect(banner).toMatch(/Welcome, today's (.*) promotion is: tomatoes for 0.99/)

		// But we cannot test if the time is right !
	})

	// What if we want to mock the .time() implementation and see whole string?
	it('should present banner with proper text', () => {
		const product = 'bananas';
		const price = 2.65;

		const banner = shoutBannerFor(product, price)

		expect(banner).toBe('Welcome, today\'s (11:02:56) promotion is: bananas for 2.65')
	})


	// We can mockImplementation per test - which is great.
	// But you need to be careful with test order, or place some beforeEach()
	// to assure implementation for each tests.

	/*
		const { time } = require('./c007-time-module');
		it('should be able to mock some other value for other test', () => {

			time.mockImplementation(() => '08:23:11')

			const product = 'bananas';
			const price = 2.65;

			const banner = shoutBannerFor(product, price)

			expect(banner).toBe('Welcome, today\'s (08:23:11) promotion is: bananas for 2.65')
		})
	*/
})
