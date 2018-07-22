'use strict';

const { resolve } = require('path');

/*
 * Vue with `babel-eslint` parser
 */
module.exports = {
	extends: resolve(__dirname, './vue.js'),
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module'
	}
};
