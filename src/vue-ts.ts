import type { Linter } from 'eslint';
import tsRules from './rules/ts.js';
import vueRules from './rules/vue.js';
import baseRules from './rules/index.js';

const config: Linter.Config[] = [
	baseRules,
	...tsRules,
	...vueRules,
	{
		languageOptions: {
			parser: require('vue-eslint-parser'),
			parserOptions: {
				parser: require('@typescript-eslint/parser'),
				project: 'tsconfig.json',
				sourceType: 'module',
				extraFileExtensions: ['.vue']
			}
		},
		plugins: {
			prettier: require('eslint-plugin-prettier')
		},
		rules: {
			'prettier/prettier': 'error'
		}
	}
];

export default config;
