'use strict';

const isProd = process.env.NODE_ENV === 'production';

/*
 * Main config
 */
module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		node: true
	},
	rules: {
		'brace-style': ['error', '1tbs'],
		'comma-dangle': 'error',
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': ['error', 'last'],
		curly: ['error', 'all'],
		'dot-location': ['warn', 'property'],
		'func-name-matching': 'warn',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'no-array-constructor': 'error',
		'no-console': isProd ? 'error' : 'off',
		'no-debugger': isProd ? 'error' : 'off',
		'no-new-object': 'error',
		'no-trailing-spaces': 'warn',
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		semi: ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-infix-ops': [
			'error',
			{
				int32Hint: false
			}
		],
		'wrap-iife': ['error', 'any'],
		yoda: [
			'error',
			'never',
			{
				exceptRange: true
			}
		]
	}
};
