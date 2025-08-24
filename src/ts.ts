import type { Linter } from 'eslint';
import tsRules from './rules/ts.js';
import baseRules from './rules/index.js';

const config: Linter.Config[] = [
	...baseRules,
	...tsRules,
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
