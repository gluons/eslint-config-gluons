'use strict';

const path = require('path');

/*
 * Vue
 */
module.exports = {
	plugins: ['vue'],
	extends: [
		path.resolve(__dirname, './es6.js'),
		'plugin:vue/recommended'
	],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/script-indent': [
			'error',
			'tab',
			{
				switchCase: 1
			}
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				multiline: 'always'
			}
		]
	}
};
