import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import mainRules from './rules/index.js';
import tsRules from './rules/ts.js';

const configs = defineConfig(
	mainRules,
	tsRules,
	eslintPluginPrettierRecommended
);

export default configs;
