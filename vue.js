'use strict';

const path = require('path');

/*
 * Vue
 */
module.exports = {
	plugins: ['vue'],
	extends: path.resolve(__dirname, './es6.js')
};
