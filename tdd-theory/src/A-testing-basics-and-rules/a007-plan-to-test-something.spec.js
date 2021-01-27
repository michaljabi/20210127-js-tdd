/**
 * In Jest.js you can plan to make a test with .todo
 *
 * After running test you will be infromed in report that e.g.:
 *  3 skipped, 6 todo, 48 passed, 57 total
 *
 * So you can see how many test is a .todo tests
 * */

function makeAnAnimalFactory(type, name = '') {}

describe('makeAnAnimalFactory [a007]', () => {

	it.todo('should throw error when no type given');

	it.todo('should handle mammal type with ....');

	it.todo('should handle bird type with ....');
})
