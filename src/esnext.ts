import type { Linter } from 'eslint';
import esnextRules from './rules/esnext.js';

const config: Linter.FlatConfig[] = [
	...esnextRules,
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
