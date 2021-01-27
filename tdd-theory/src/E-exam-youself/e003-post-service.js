const axios = require('axios');
const hostURL = 'https://jsonplaceholder.typicode.com';

const postService = {
	getAll() {
		 return axios.get(hostURL + '/posts').then((res) => res.data)
	}
}

exports.postService = postService;
