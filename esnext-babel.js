'use strict';

const path = require('path');

/*
 * ECMAScript 6+ with `babel-eslint` parser
 */
module.exports = {
	extends: path.resolve(__dirname, './esnext.js'),
	parser: 'babel-eslint'
};
