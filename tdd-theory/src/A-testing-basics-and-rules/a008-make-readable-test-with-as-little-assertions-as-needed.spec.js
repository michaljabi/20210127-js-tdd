/**
 * Consider this simple example.
 *
 * It shows the general approach in testing many use cases of your SUD (System Under Test).
 *
 * As a developers we often look for possible shortest and easiest solution.
 * Avoiding repetitions and re-using the constructions from code.
 *
 * This approach seems to be good with the tests - but, here - we have to care about:
 * - readability
 * - clear understanding of whats going on.
 *
 * Sometimes, making something in one place and cover it just for 3-4 tests, reduces readability
 * and if we got some cryptic code inside the test - we do not know what dev really test.
 * Making a shortcuts of testing few things in one test - is not quite good solution either.
 *
 *
 *
 * */

function carFactory(engine, model, manufacturer = 'BMW') {
	return {
		engine,
		model,
		manufacturer
	}
}


describe('carFactory [a008]', () => {

	// [WRONG !]
	// It might be tempting to test all of the cases at once:
	it('should create a new Car model, when properties given', () => {

		const myCar = carFactory(2.2, 'A8', 'Audi');

		expect(myCar).toStrictEqual({engine: 2.2, manufacturer: 'Audi', model: 'A8'})

		const myCar2 = carFactory(4.4, 'X7')

		expect(myCar2).toStrictEqual({manufacturer: 'BMW', engine: 4.4, model: 'X7'})
	})

	// BETTER:
	// Reveal your intentions, by making 2 test cases:
	it('should create a new Car model, when all properties given', () => {

		const myCar = carFactory(2.2, 'C238', 'Mercedes');

		expect(myCar).toStrictEqual({engine: 2.2, manufacturer: 'Mercedes', model: 'C238'})
	})


	// This test even though it's verbose, gives you more "readability" and clearance
	// We see what exactly developer wanted to be tested.
	it('should make default manufacturer to BMW when only engine capacity and model given RQ-234', () => {
		// GIVEN:
		const engineCapacity = 4.4;
		const model = 'X7';
		// WHEN:
		const myCar2 = carFactory(engineCapacity, model)
		// THEN:
		expect(myCar2).toStrictEqual({manufacturer: 'BMW', engine: 4.4, model: 'X7'})
	})
})
