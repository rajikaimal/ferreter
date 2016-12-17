import request from 'request';
import isOnline from 'is-online';

export default function(url, data) {
	return new Promise((resolve, reject) => {
		isOnline().then(online => {
		    request.post(url, {form: data}, (err, response) => {
		    	if(err) reject(err);

		    	resolve(response);
		    });
		});
	});
}