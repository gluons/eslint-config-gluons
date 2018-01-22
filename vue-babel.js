'use strict';

const path = require('path');

/*
 * Vue with `babel-eslint` parser
 */
module.exports = {
	extends: path.resolve(__dirname, './vue.js'),
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	}
};
