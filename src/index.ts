import type { Linter } from 'eslint';
import baseRules from './rules/index.js';

const config: Linter.Config[] = [
	...baseRules,
	{
		plugins: {
			prettier: require('eslint-plugin-prettier')
		},
		rules: {
			'prettier/prettier': 'error'
		}
	}
];

export default config;
