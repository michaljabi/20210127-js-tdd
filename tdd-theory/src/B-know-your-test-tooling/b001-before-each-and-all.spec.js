/**
 * REMEMBER:
 *
 * - good tests are independent on each other!
 * - they should be able to run in random order, providing same results
 *
 * that is why blocks like beforeAll and beforeEach / afterAll and afterEach might be very useful.
 * e.g.: you got a singleton module in your app, before each test you want it to be cleaned out.
 *       To have the same "starting point" for all tests.
 * */
describe('beforeEach and beforeAll block [b001]', () => {

	let initialValue = 100;
	let someRestartableValue = '!';

	beforeAll(() => {
		initialValue = 2000;
	})

	beforeEach(() => {
		someRestartableValue = '😃';
	})

	/*
		This can also prevent you for writing empty test
		test will fail if it is without expectations:

		beforeEach(() => {
			expect.hasAssertions();
		})
	*/

	it('should be init before all test', () => {

		initialValue++;
		/*
		* Now we cannot know if  initialValue is 2001 or 2002
		* Two test (this and test below increment this value)
		* Test can be run in different order (and that is the point of them being independent on each other!)
		* */

		expect(initialValue).toBeGreaterThan(2000);
	})

	it('should be init before all test', () => {

		initialValue++;
		/*
		* Now we cannot know if  initialValue is 2001 or 2002
		* Test can be run in different order (and that is the point of them being independent on each other!)
		* */

		expect(initialValue).toBeGreaterThan(2000);
	})

	describe('someRestartableValue', () => {

			/*
			* Below we got the prof that: someRestartableValue
			* will always be = 😃 when test is starting.
			* */

		  it('should be always 😃 on start', () => {

		  	expect(someRestartableValue).toBe('😃')

			  someRestartableValue = 'TROLL';

			  expect(someRestartableValue).toBe('TROLL')
		  })

			it('should be always 😃 on start - example 2', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'CHANGED !';
			})

			it('should be always 😃 on start - example 3', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'NEW !';
			})

			it('should be always 😃 on start - example 4', () => {
				expect(someRestartableValue).toBe('😃');
				someRestartableValue = 'COme ON !';
			})
	})
})
