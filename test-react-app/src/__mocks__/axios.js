import { CancelToken } from 'axios'

const axios = {
	create: () => ({
		get: jest.fn(() => Promise.resolve({results: [ {name: 'Jabba Example'} ]})),
		interceptors: {
			response: {
				use: () => {}
			}
		}
	})
};

export default axios;
export { CancelToken }
