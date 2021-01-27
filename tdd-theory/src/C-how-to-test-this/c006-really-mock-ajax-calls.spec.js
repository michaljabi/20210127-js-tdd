/**
 * Here we are using MSW:
 *
 * @see https://mswjs.io/
 *
 * */
const { rest } = require('msw');
const { setupServer } = require('msw/node');

describe('[c006] - how to stub ajax/http/https calls?', () => {

	// This server will intercept ALL of our network requests, to given endpoint:
	const server = setupServer(
		rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
			return res(ctx.json({id: 1, title: 'This is fake', completed: true}))
		})
	)

	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	describe('takeTodo - with fake server MSW', () => {

		// Unit Under Test:
		const { myFetch } = require('./c005-ajax-caller')
		function takeTodo(id) {
			return myFetch('https://jsonplaceholder.typicode.com/todos/' + id)
				.then((todo) => {
					const {id, title, completed} = todo
					return `[${ completed ? '✔' : ' ' }] (${id}) ${title}`
				})
				.catch((err) => {
					return `Cannot load task id: ${id}, [error: ${err.message}]`;
				})
		}

		it('should render completed task in format [✔] (id) title', async () => {

			const myTask = await takeTodo(1);

			expect(myTask).toBe('[✔] (1) This is fake')
		})

		it('should render uncompleted task in format [ ] (id) title', async () => {

			server.use(rest.get('https://jsonplaceholder.typicode.com/todos/:id', (req, res, ctx) => {
				// we return dynamic id:
				const { id } = req.params;
				return res(ctx.json({id , title: 'This is other task', completed: false}))
			}))

			const myTask = await takeTodo(2);

			expect(myTask).toBe('[ ] (2) This is other task')
		})

		it('should render errors', async () => {

			server.use(rest.get('https://jsonplaceholder.typicode.com/todos/:id', (req, res, ctx) => {
				return res(
					ctx.status(403),
					ctx.json({
						message: 'Not authorized',
					})
				)
			}))

			const myTask = await takeTodo(1232);

			expect(myTask).toBe('Cannot load task id: 1232, [error: Not authorized]')
		})

	})
})
