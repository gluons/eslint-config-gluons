import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

const config: Config = {
	plugins: ['@typescript-eslint'],
	extends: [
		resolve(__dirname, './esnext'),
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		extraFileExtensions: ['.vue']
	},
	rules: {
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
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
		'@typescript-eslint/no-floating-promises': [
			'error',
			{ ignoreIIFE: true }
		],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		semi: 'off',
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': 'off'
	}
};

export = config;
