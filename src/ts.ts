import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tsRules from './rules/ts.js';
import baseRules from './rules/index.js';

const configs = defineConfig(
	baseRules,
	tsRules,
	eslintPluginPrettierRecommended
);

export default configs;
