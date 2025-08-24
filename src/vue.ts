import type { Linter } from 'eslint';
import vueRules from './rules/vue.js';
import esnextRules from './rules/esnext.js';

const config: Linter.Config[] = [
	...esnextRules,
	...vueRules,
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
