import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import mainRules from './rules/main.js';
import tsRules from './rules/ts.js';
import vueRules from './rules/vue.js';

const config = defineConfig([
	mainRules,
	tsRules,
	vueRules,
	eslintPluginPrettierRecommended
]);

export default config;
