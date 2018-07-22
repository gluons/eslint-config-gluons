'use strict';

const { resolve } = require('path');

/*
 * ECMAScript 6+ with `babel-eslint` parser
 */
module.exports = {
	extends: resolve(__dirname, './esnext.js'),
	parser: 'babel-eslint'
};
