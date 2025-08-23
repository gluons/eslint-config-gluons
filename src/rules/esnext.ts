import type { Linter } from 'eslint';
import baseConfig from './index.js';

const config: Linter.FlatConfig = {
	files: ['**/*.js', '**/*.jsx'],
	...baseConfig[0],
	languageOptions: {
		...baseConfig[0].languageOptions,
		ecmaVersion: 2022,
		sourceType: 'module',
		globals: {
			...(baseConfig[0].languageOptions?.globals || {}),
			es2020: true
		}
	},
	rules: {
		...(baseConfig[0].rules || {}),
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

export default [config];
