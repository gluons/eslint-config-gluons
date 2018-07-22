'use strict';

const { resolve } = require('path');

/*
 * Main config with `babel-eslint` parser
 */
module.exports = {
	extends: resolve(__dirname, './index.js'),
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'script'
	}
};
