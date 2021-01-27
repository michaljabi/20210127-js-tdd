/**
 * You can write test in the "behavioral" way.
 *
 * Then function "test" will change to "it"
 *
 * and you can read this like:
 * it should....
 *
 * e.g.:
 * - it should divide the result by 3
 * - it should show "OK" when button "Done" clicked.
 * - it should throw an "Wrong Type" error when other than number input given
 *
 * Below is a "real word" example
 * You explain what should happen and sometimes clarify when.
 * */
function mySuperFunction(word) {
	  return word ? 'something' : 'nothing';
}

// console.log(jest);

describe('mySuperFunction [a005]', () => {

	it('should return "nothing" when no arguments given', () => {
		const result = mySuperFunction();

		expect(result).toBe('nothing')
	})

	it('should return "something" when at least one truthy argument given', () => {
		const truthyArg = 'some-test';

		const result = mySuperFunction(truthyArg);

		expect(result).toBe('something')
	})
})
