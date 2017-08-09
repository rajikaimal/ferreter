import {assert} from 'chai';
import ferreter from '../src/index';
import nock from 'nock';

describe('test core', function () {
	it('should ping server', function (done) {
		nock('http://google.com:80', {"encodedQueryParams":true})
		  .post('/', "something=something")
		  .reply(405, "<!DOCTYPE html>\n<html lang=en>\n  <meta charset=utf-8>\n  <meta name=viewport content=\"initial-scale=1, minimum-scale=1, width=device-width\">\n  <title>Error 405 (Method Not Allowed)!!1</title>\n  <style>\n    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}\n  </style>\n  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>\n  <p><b>405.</b> <ins>That’s an error.</ins>\n  <p>The request method <code>POST</code> is inappropriate for the URL <code>/</code>.  <ins>That’s all we know.</ins>\n", [ 'Allow',
		  'GET, HEAD',
		  'Date',
		  'Wed, 09 Aug 2017 17:04:14 GMT',
		  'Content-Type',
		  'text/html; charset=UTF-8',
		  'Server',
		  'gws',
		  'Content-Length',
		  '1589',
		  'X-XSS-Protection',
		  '1; mode=block',
		  'X-Frame-Options',
		  'SAMEORIGIN',
		  'Connection',
		  'close' ]);

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
