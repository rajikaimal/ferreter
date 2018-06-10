# ferreter [![Build Status](https://travis-ci.org/rajikaimal/ferreter.svg?branch=master)](https://travis-ci.org/rajikaimal/ferreter) [![Greenkeeper badge](https://badges.greenkeeper.io/rajikaimal/ferreter.svg)](https://greenkeeper.io/)

Collect anonymous usage for NPM package usage

## Install

```
yarn add ferreter --save-dev
```

## Usage

```js
const ferreter = require('ferreter');

ferreter('http://google.com', {'key': 'value'})
	.then((res) => {
		console.log('Done', res);
	})
	.catch((err) => {
		console.log('Something happened', err);
	});
```

## API

### ferreter(url, data)

Returns a promise

#### url

Type: `string`

URL to post usage statistics

#### data

Type: `object`

Custom object containing statistics

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)
