import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

const configs = defineConfig([
	stylistic.configs.recommended,
	{
		files: ['**/*.js', '**/*.mjs'],
		rules: {
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/arrow-spacing': [
				'error',
				{
					before: true,
					after: true
				}
			],
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/comma-dangle': 'error',
			'@stylistic/comma-spacing': [
				'error',
				{
					before: false,
					after: true
				}
			],
			'@stylistic/comma-style': ['error', 'last'],
			'@stylistic/dot-location': ['warn', 'property'],
			'@stylistic/generator-star-spacing': ['error', 'after'],
			'@stylistic/indent': [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],
			'@stylistic/key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true
				}
			],
			'@stylistic/keyword-spacing': [
				'error',
				{
					before: true,
					after: true
				}
			],
			'@stylistic/no-confusing-arrow': [
				'warn',
				{
					allowParens: true
				}
			],
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/quotes': [
				'error',
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: true
				}
			],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/semi-spacing': [
				'error',
				{
					before: false,
					after: true
				}
			],
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always'
				}
			],
			'@stylistic/space-infix-ops': [
				'error',
				{
					int32Hint: false
				}
			],
			'@stylistic/wrap-iife': ['error', 'any']
		}
	}
]);

export default configs;
