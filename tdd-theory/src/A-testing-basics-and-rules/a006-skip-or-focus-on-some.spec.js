/**
 * You can decide, which test should be skipped from the file.
 *
 * That allow you to not focus on some particular test, for now - without deleting it.
 *
 * You should be careful and avoid skipping test if they were green but now turns red,
 * because you are making changes in some features depend on other already built.
 * If you .skip then you might forget to "un-skip" the test later, and if it still red -
 * it also should be either feedback for you - or you should repair it (refactor).
 *
* */

describe('skipping tests [a006]', () => {

	it.skip('this test should be skipped with [test|it].skip', () => {
		expect(10).toBe(20);
	})

	xit('this test should also be skipped with (x)it / (x)test', () => {
		expect(10).toBe(20);
	})

	/*
	 Tests below when uncomment will be "focused".
	 That means only them would be picked from this file.

	 Depend on test runner - it might be the only test with .only or fit( that will run.
	 (not only from file, but only in global context).

	 This option is very useful when you introduce testing to project in which, there are many
	 generated test already (e.g. @angular/cli projects) and nobody cared about them up until now.
	 You have many many red tests - and you do not want to be distracted by them at the moment.
	*/

	// it.only('should run this test only with using: .only', () => {
	//
	// })
	//
	// fit('should attach this test also with: fit', () => {
	//
	// })

	it('this test will not run (because of .only and fit)', () => {
		//expect(1000 + 10).toEqual(10)
	})
})

/*
		[!] Note:
		The same thing you can do for the describe() blocks / test suites:
		with: describe.only('', () => {}) or fdescribe('', () => {})
		https://jestjs.io/docs/en/api#describeonlyname-fn
		and skip part:
		https://jestjs.io/docs/en/api#describeskipname-fn

		It will skip the block, or focus on the whole block depend of how many blocks you have
		and either "skip" or "only" used...
 */


describe.skip('this block will not fire due to .skip() ', () => {

	 it('should not be visible', () => {
	 	  const ok = 'Hi';

	 	  expect(ok).toBe('Hi there')
	 })
})
