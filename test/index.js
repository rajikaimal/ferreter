import {assert} from 'chai';
import ferreter from '../src/index';

describe('test core', function () {
	it('should ping server', function (done) {
		ferreter('http://google.com', {'something': 'something'})
			.then((res) => {
				assert.typeOf(res, 'object', 'response object');
				done();
			})
			.catch((err) => {
				assert.typeOf(err, 'object', 'error response object');
				done();
			});
	});
});
