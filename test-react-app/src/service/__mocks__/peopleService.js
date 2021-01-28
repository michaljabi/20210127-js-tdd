import cancelableRequest from '../cancelableRequest'

const service = {
	search() {
		return cancelableRequest(() => () => Promise.resolve({results: [{name: 'Han Solo'}]}))
	}
}

export default service;
