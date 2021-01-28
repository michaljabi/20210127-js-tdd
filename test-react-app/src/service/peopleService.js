import axInstance from './axInstance'
import cancelableRequest from './cancelableRequest'

const service = {
	search() {
		 return cancelableRequest((cancelToken) => (query) => {
			 return axInstance.get('/people/', {params: {search: query}, cancelToken})
		 })
	}
}

export default service;



