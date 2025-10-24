import { defineConfig } from 'eslint/config';
import tsRules from './rules/ts.js';
import baseRules from './rules/index.js';

const configs = defineConfig(baseRules, tsRules, {
	plugins: {
		prettier: require('eslint-plugin-prettier')
	},
	rules: {
		'prettier/prettier': 'error'
	}
});

export default configs;
