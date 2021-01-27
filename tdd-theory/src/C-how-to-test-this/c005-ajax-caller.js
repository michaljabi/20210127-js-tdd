
exports.myFetch = function(url) {
	const https = require('https');
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';
			res.on('data', (chunk) => data += chunk);
			res.on('error', (error) => reject(error));
			res.on('end', () => {
				try {
					const parsed = JSON.parse( data )
					if(res.statusCode >= 400) {
						reject(parsed);
					} else {
						resolve(parsed);
					}
				} catch (e) {
					reject(e);
				}
			});
		})
	})
}
