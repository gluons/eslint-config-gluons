'use strict';

const { resolve } = require('path');

/*
 * TypeScript config
 */
module.exports = {
	extends: [
		resolve(__dirname, './index.js'),
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.vue']
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// '@typescript-eslint/brace-style': ['error', '1tbs'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'@typescript-eslint/member-ordering': [
			'warn',
			{
				default: [
					'private-static-field',
					'protected-static-field',
					'public-static-field',

					'private-static-method',
					'protected-static-method',
					'public-static-method',

					'private-instance-field',
					'protected-instance-field',
					'public-instance-field',

					'private-constructor',
					'protected-constructor',
					'public-constructor',

					'private-instance-method',
					'protected-instance-method',
					'public-instance-method'
				]
			}
		],
		'@typescript-eslint/semi': ['error', 'always']
	}
};
