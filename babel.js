'use strict';

const path = require('path');

/*
 * Main config with `babel-eslint` parser
 */
module.exports = {
	extends: path.resolve(__dirname, './index.js'),
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'script'
	}
};
