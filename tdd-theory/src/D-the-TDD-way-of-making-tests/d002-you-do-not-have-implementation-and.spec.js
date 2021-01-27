/**
 * OK, it sill remain simple.
 * We focus on some functionality that we want - not on the whole system.
 *
 * But for now, you should see it:
 *
 * - RED: test
 * - GREEN: implement
 * - REFACTOR: optimize / self code review
 *
 * Now we got a testing plan - but no test ro implementation written so far...
 * It looks almost like a starting point.
 * But simplified with already given plan.
 *
 * Imagine task like that:
 *
 * Make a functionality to "drive a car".
 *
 * Requirements:
 * - there can be many cars
 * - each car have an automatic gearbox
 * - gearbox should have 5 gears from 1 - 5 depend on speed you wanna achieve on the car.
 * - you can change gear one-by-one, but they can be switched immediately form 1 to 5 going -> 1,2,3,4,5
 * - car can only speed Up or Down by any value
 * - max car speed is 160 kph - min 0 kph
 * - gears should change at:
 *   - 2nd  25 km/h,
 *   - 3rd  40 km/h,
 *   - 4th  65 km/h,
 *   - 5th  90 km/h
 *
 * - for simplicity changing gears down is on similar speeds
 *
 * Sample User Stories:
 * As a Driver I can speed up/down the Car from 0 - 160kph by any value
 * As a Driver I can speed up/down the Car from current value by any value
 * As a Driver I expect car to change gears automatically
 * As a Driver I want the 5-gear transmission installed on the Car
 * */


describe('the Car with Gearbox', () => {

	it.todo('should make a car with a gearbox')

	it.todo('should start with 0 kph speed and 1st gear')

	it.todo('should speed Up max to 160kph')

	it.todo('should speed Down to min 0kph')

	it.todo('should change gear one-time to 2nd after speed up to 25kph')

	it.todo('should change gear 3-times to 4th after speed up to 65kph')

	it.todo('should reduce down gears 5 times from speed of 160kph to 10kph')

	// - to check: if we can have data-driven tests here?
	// - to check: if we need to be guarded from non-numeric value?
	// - to check: if somebody will slow up or down with value below zero?

})
