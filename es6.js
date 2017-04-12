/*
 * ECMAScript 6
 */
module.exports = {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'generator-star-spacing': ['error', 'after'],
		'no-confusing-arrow': [
			'warn',
			{
				'allowParens': true
			}
		],
		'no-duplicate-imports': 'error',
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always',
			{
				'avoidQuotes': true
			}
		],
		'prefer-spread': 'warn',
		'prefer-template': 'error'
	},
	env: {
		es6: true
	},
	extends: 'gluons'
};
