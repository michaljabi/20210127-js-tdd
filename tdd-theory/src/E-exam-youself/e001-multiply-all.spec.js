/**
 * #1 TASK:
 * For the warm up starter - task is easier.
 *
 * - First test has been written for you.
 * - The rest (implementation and maybe more tests?) is up to you.
 *
 * Specification:
 * Write function to multiply all of given arguments
 *
 * for example, given INPUT: 1 2 3 4 5
 *
 * will make multiply: 1 * 2 * 3 * 4 * 5
 *
 * and result in OUTPUT: 120
 *
 * and so on.
 *
 * Corner cases:
 * - no arguments given - OUTPUT: 1
 * - wrong type as argument given eg. string - silent apply (skip the argument) eg.
 *    - INPUT: 1 2 '3'
 *    - OUTPUT: 2
 *
 *    - INPUT 2 4 true
 *    - OUTPUT: 8
 *
 *    - INPUT: 3 'ok' '2' 2
 *    - OUTPUT: 6
 * */

const { multiplyAll } = require('./e001-multiply-all');

// Remove .skip BEFORE writing test

/*
* Try to make it TDD way.
*
* 1st - write tests
* 2nd - implement
* 3rd - refactor
* */

describe('multiplyAll', () => {

	beforeEach(() => {
		expect.hasAssertions();
	})

	it('should multiply N given arguments', () => {

		const result = multiplyAll(2, 3, 9)

        expect(result).toEqual(54);
	})

	it('should return 1 if no arguments given', () => {
        
        const result = multiplyAll();
        
        expect(result).toBe(1);
    })

    it('should skip arguments which are not type of number and not multiply by them', () => {
        const stringNumber = '22';
        const args = [2, 4, true, 'k', 2, stringNumber];
        
        const result = multiplyAll(...args);
        // const result = multiplyAll(2, 4, true, 'k', 2);
        
        expect(result).toBe(16);
    })
    
    it('should skip if argument is Infinity or NaN for sake of multiplying' , () => {
        
        const resultWithInfinity = multiplyAll(Infinity);
        const resultWithNaN = multiplyAll(NaN);
        
        expect(resultWithInfinity).toBe(1);
        expect(resultWithNaN).toBe(1);
    })
    
    it('should return 0 if any of arguments is a 0', () => {
        const ZERO = 0;
        
        const result = multiplyAll(2, 4, 10, ZERO, 8, 100);
        
        expect(result).toBe(0);
    })
    
    
})
