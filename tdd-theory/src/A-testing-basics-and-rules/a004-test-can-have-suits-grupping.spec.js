/**
 * WARNING:
 * - please note, that the tests here are EMPTY
 * - normally you should avoid making such tests, as e risk of having "false positive" - empty test.
 * - later we will learn about: expect.assertions(1);
 * - or to plan tests with test.todo / it.todo methods
 *
 * This example should show you how you can divide your tests inside one file, to some groups.
 *
 * It is good to have one MAIN group which indicates what are you testing.
 * Then you can divide this group on smaller parts if needed.
 *
 * Sometimes is obvious what are you testing and why, sometimes it isint, and those "describe"
 * blocks can help you with pointing out that some group of test are:
 * - needed
 * - somehow related to things they are testing
 * - have similar setup and teardown needed
 * */

describe('sample test suite [a004]', () => {
	test('can be grouped in so called test suits' , () => {
		/*
			This can prevent you for writing empty test
		  test will fail on purpose - when you uncomment line below:
		*/
		// expect.assertions(1);
	})
})


describe('other nested sample test suite [a004]', () => {

	test('can be grouped in so called test suits' , () => {

	})

	describe('suits can have other suits... and so on...', () => {
		test('can be grouped in test suit of test suit...' , () => {
            expect.hasAssertions();
            
            expect(1).toBe(1);
		})

		test('can be many of them' , () => {

		})
	})
});
