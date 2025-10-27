import type { Linter } from 'eslint';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

const isProd = process.env.NODE_ENV === 'production';

const config: Linter.Config = {
	files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		globals: {
			...globals.browser,
			...globals.node
		}
	},
	plugins: {
		'@stylistic': stylistic
	},
	rules: {
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
		curly: ['error', 'all'],
		'@stylistic/dot-location': ['warn', 'property'],
		'func-name-matching': 'warn',
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
		'no-array-constructor': 'error',
		'no-console': isProd ? 'error' : 'off',
		'no-debugger': isProd ? 'error' : 'off',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-object-constructor': 'error',
		'@stylistic/no-trailing-spaces': 'warn',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_'
			}
		],
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
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
		'@stylistic/wrap-iife': ['error', 'any'],
		yoda: [
			'error',
			'never',
			{
				exceptRange: true
			}
		]
	}
};

export default config;
