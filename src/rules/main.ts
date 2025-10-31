import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import stylistic from './stylistic.js';

const isProd = process.env.NODE_ENV === 'production';

const configs = defineConfig([
	js.configs.recommended,
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
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
			curly: ['error', 'all'],
			'func-name-matching': 'warn',
			'no-array-constructor': 'error',
			'no-console': isProd ? 'error' : 'off',
			'no-debugger': isProd ? 'error' : 'off',
			'no-duplicate-imports': 'error',
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true
				}
			],
			'no-object-constructor': 'error',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_'
				}
			],
			'no-useless-concat': 'warn',
			'no-useless-escape': 'warn',
			'no-var': 'error',
			'object-shorthand': [
				'error',
				'always',
				{
					avoidQuotes: true
				}
			],
			'prefer-spread': 'warn',
			'prefer-template': 'error',
			yoda: [
				'error',
				'never',
				{
					exceptRange: true
				}
			]
		}
	},
	stylistic
]);

export default configs;
