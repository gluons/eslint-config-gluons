'use strict';

const { resolve } = require('path');

/*
 * ECMAScript 6+
 */
module.exports = {
	extends: resolve(__dirname, './index.js'),
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	env: {
		es6: true
	},
	rules: {
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: true
			}
		],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'generator-star-spacing': ['error', 'after'],
		'no-confusing-arrow': [
			'warn',
			{
				allowParens: true
			}
		],
		'no-duplicate-imports': 'error',
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true
			}
		],
		'prefer-spread': 'warn',
		'prefer-template': 'error'
	}
};
