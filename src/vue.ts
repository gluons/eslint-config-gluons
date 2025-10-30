import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import mainRules from './rules/main.js';
import vueRules from './rules/vue.js';

const config = defineConfig([
	mainRules,
	vueRules,
	eslintPluginPrettierRecommended
]);

export default config;
