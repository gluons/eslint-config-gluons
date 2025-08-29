import type { ConfigWithExtends } from '@eslint/config-helpers';
import globals from 'globals';
import baseConfig from './index.js';

const config: ConfigWithExtends = {
	files: ['**/*.js', '**/*.jsx'],
	extends: [baseConfig],
	languageOptions: {
		globals: {
			...globals.es2025
		}
	},
	rules: {
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: true
			}
		],
		'@stylistic/arrow-parens': ['error', 'as-needed'],
		'@stylistic/arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'@stylistic/generator-star-spacing': ['error', 'after'],
		'@stylistic/no-confusing-arrow': [
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

export default config;
