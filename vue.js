'use strict';

const { resolve } = require('path');

/*
 * Vue
 */
module.exports = {
	plugins: ['vue'],
	extends: [
		resolve(__dirname, './esnext.js'),
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
