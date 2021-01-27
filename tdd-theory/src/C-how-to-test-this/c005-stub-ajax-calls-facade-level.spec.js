/**
 * Problem here is this inner dependency inside takeTodo();
 *
 * There is a call using `myFetch` from outer module.
 * We do not have access to this call in line 19.
 * We cannot spy on it or Stub it.
 *
 * Instead we can stub whole module:./c005-ajax-caller
 * and return hardcoded version of our to do.
 *
 * NOTICE:
 * - we do not want to make this AJAX or HTTPS request go on-line, that's the point
 * - that suppose to be unit test, not integration or functional!
 *
 */

jest.mock('./c005-ajax-caller', () => ({
	myFetch: jest.fn((url) => Promise.resolve({id: 1, title: 'This is fake', completed: true}))
}));


describe('[c005] - how to stub ajax/http/https calls before they will be called via our API?', () => {

	describe('takeTodo', () => {

		// Unit Under Test:
		const { myFetch } = require('./c005-ajax-caller')
		function takeTodo() {
			return myFetch('https://jsonplaceholder.typicode.com/todos/1')
				.then((todo) => {
					const {id, title, completed} = todo
					return `[${ completed ? '✔' : ' ' }] (${id}) ${title}`
				})
		}

		it('should fetch data from https://jsonplaceholder.typicode.com/todos/1', async () => {

			await takeTodo();

			expect(myFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1')
		})

		it('should call return task in format [done?] (id) title', async () => {

			const myTask = await takeTodo();

			expect(myTask).toBe('[✔] (1) This is fake')
		})

	})
})
